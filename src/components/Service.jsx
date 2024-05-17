import React from "react";
import "./Service.css";
import { ServiceCard } from "./canvas";

function Services() {
  return (
    <div className="mainDiv1">
      <h2 className="FeaturedWork1">Our Services</h2>

      <div className="grid-container1">
        <ServiceCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2FwebApp.jpg?alt=media&token=3f371c88-3a17-440b-9551-4ef444f2b2fd"
          title="Website & Web App Development"
          content="Crafting responsive, user-friendly, and scalable websites and web applications tailored to your unique needs. We leverage the latest technologies and best practices to deliver solutions that drive engagement and growth."
        />
        <ServiceCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2FmodileApp.jpg?alt=media&token=429c8c1f-ced5-4b5f-99c5-2da09d80884f"
          title="Mobile App Development"
          content="Building intuitive and high-performance mobile applications for iOS and Android. Our team designs and develops apps that offer seamless user experiences and robust functionalities."
        />
        <ServiceCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2F3dmodelling.png?alt=media&token=301e0781-d5a9-4f39-afbc-4a37904c9d5e"
          title="3D Modeling and Animation"
          content="Transforming concepts into captivating visual experiences with our 3D modeling and animation services. From product visualizations to immersive animations, we bring depth and dynamism to your projects."
        />
        <ServiceCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2FgraphicDesign.jpg?alt=media&token=8e24c2ae-f1ab-401f-9206-f15240b65b39"
          title="Graphic Design"
          content="Creating impactful visual identities that resonate with your audience. Our graphic design services encompass branding, print design, digital assets, and more, ensuring cohesive and compelling visual communication across all platforms."
        />
        <ServiceCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2FmotionGraphics.jpg?alt=media&token=f412e8ed-cef5-4335-93fc-2fac74e91eb9"
          title="Motion Graphics"
          content=" Adding movement and storytelling to your content with our motion graphics expertise. Whether it’s explainer videos, promotional content, or animated logos, we craft animations that engage and inspire."
        />
        <div className="viewMoreButtonDiv1"></div>
      </div>
    </div>
  );
}

export default Services;
