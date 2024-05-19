// src/ThreeScene.js

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000); // Aspect ratio will be set later
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer();
    mountRef.current.appendChild(renderer.domElement);

    // Add a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Resize function
    const resizeRenderer = () => {
      const parent = mountRef.current;
      if (parent) {
        const { clientHeight, clientWidth } = parent;
        const aspectRatio = clientWidth / clientHeight;

        // Set the renderer size to fit the parent div
        renderer.setSize(clientWidth, clientHeight);
        // Update the camera aspect ratio and projection matrix
        camera.aspect = aspectRatio;
        camera.updateProjectionMatrix();
      }
    };

    // Initial resize to match parent div size
    resizeRenderer();

    // Handle window resize
    window.addEventListener("resize", resizeRenderer);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", resizeRenderer);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default ThreeScene;
