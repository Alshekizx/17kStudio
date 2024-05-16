import React from "react";
import "./Service.css";
import { ServiceCard } from "./canvas";
import robot from "../assets/robot.jpeg";
import Tdmodelling from "../assets/3dmodelling.png";
import graphicDesign from "../assets/graphicDesign.jpg";
import modileApp from "../assets/modileApp.jpg";
import motionGraphics from "../assets/motionGraphics.jpg";
import webApp from "../assets/webApp.jpg";
function Services() {
  return (
    <div className="mainDiv1">
      <h2 className="FeaturedWork1">Our Services</h2>

      <div className="grid-container1">
        <ServiceCard
          backgroundImage={webApp}
          title="Website & Web App Development"
          content="Crafting responsive, user-friendly, and scalable websites and web applications tailored to your unique needs. We leverage the latest technologies and best practices to deliver solutions that drive engagement and growth."
        />
        <ServiceCard
          backgroundImage={modileApp}
          title="Mobile App Development"
          content="Building intuitive and high-performance mobile applications for iOS and Android. Our team designs and develops apps that offer seamless user experiences and robust functionalities."
        />
        <ServiceCard
          backgroundImage={Tdmodelling}
          title="3D Modeling and Animation"
          content="Transforming concepts into captivating visual experiences with our 3D modeling and animation services. From product visualizations to immersive animations, we bring depth and dynamism to your projects."
        />
        <ServiceCard
          backgroundImage={graphicDesign}
          title="Graphic Design"
          content="Creating impactful visual identities that resonate with your audience. Our graphic design services encompass branding, print design, digital assets, and more, ensuring cohesive and compelling visual communication across all platforms."
        />
        <ServiceCard
          backgroundImage={motionGraphics}
          title="Motion Graphics"
          content=" Adding movement and storytelling to your content with our motion graphics expertise. Whether it’s explainer videos, promotional content, or animated logos, we craft animations that engage and inspire."
        />
        <div className="viewMoreButtonDiv1"></div>
      </div>
    </div>
  );
}

export default Services;
