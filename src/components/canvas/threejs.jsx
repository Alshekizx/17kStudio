import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeScene = () => {
  const mountRef = useRef(null);
  const modelRef = useRef(null); // Reference to the loaded model
  const mouseRef = useRef({ isDragging: false, previousX: 0 });

  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio will be set later
    camera.position.set(0, -0.3, 1);
    camera.rotation.set(0.38, 0, 0);

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    // Append renderer to DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Soft white light
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(5, 5, 10).normalize();
    scene.add(directionalLight);

    // Add point light
    const pointLight = new THREE.PointLight(0xff0000, 200, 100);
    pointLight.position.set(10, 5, 2);
    scene.add(pointLight);

    // Load a 3D model
    const modelUrl =
      "https://raw.githubusercontent.com/Alshekizx/17kStudio/3dAssets/17k.glb";

    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model; // Save reference to the model
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Resize function
    const resizeRenderer = () => {
      if (mountRef.current) {
        const size = mountRef.current.clientWidth; // Ensure square dimensions

        // Set the renderer size to fit the parent div
        renderer.setSize(size, size);
        // Update the camera aspect ratio and projection matrix
        camera.aspect = 1; // 1:1 aspect ratio
        camera.updateProjectionMatrix();
      }
    };

    // Initial resize to match parent div size
    resizeRenderer();

    // Handle window resize
    window.addEventListener("resize", resizeRenderer);

    // Mouse event handlers
    const handleMouseDown = (event) => {
      mouseRef.current.isDragging = true;
      mouseRef.current.previousX = event.clientX;
    };

    const handleMouseMove = (event) => {
      if (!mouseRef.current.isDragging) return;
      const deltaX = event.clientX - mouseRef.current.previousX;
      mouseRef.current.previousX = event.clientX;

      camera.position.x -= deltaX * 0.01;
      camera.lookAt(scene.position);
    };

    const handleMouseUp = () => {
      mouseRef.current.isDragging = false;
    };

    // Add event listeners
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model slowly around the y-axis
      if (modelRef.current) {
        modelRef.current.rotation.y -= 0.003; // Adjust the rotation speed as desired
      }

      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", resizeRenderer);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "0",
        paddingBottom: "100%", // 1:1 aspect ratio
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>
    </div>
  );
};

export default ThreeScene;
