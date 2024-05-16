import React from "react";
import "./Project.css";
import cubes from "../assets/cubes.jpg";
import { ProjectCard } from "./canvas";
import ilinky from "../assets/Ilinky.png";
import coffeeShop from "../assets/coffeeShop.png";
import lovejs from "../assets/lovejs.png";
import carjs from "../assets/carjs.png";
import spinjs from "../assets/spinjs.png";
import batman from "../assets/batman.png";
import kitchen4 from "../assets/kitchen4.png";
import born2learn from "../assets/born2learn.jpg";
import instaPost from "../assets/instaPost.png";
import Vires from "../assets/Vires.png";

export default function Project() {
  return (
    <div className="ProjectDiv">
      <div className="ProjectDiv2">
        <h2>EXPLORE A SELECTION OF MY WORK FOR CLIENTS</h2>
        <div className="ProjectEmpty" />
      </div>
      <div className="ProjectDivLine" />
      <div className="ProjectCardDiv">
        <ProjectCard
          backgroundImage={ilinky}
          title="Ilinky"
          hashtag3="#mobile"
          ViewMore="https://github.com/Alshekizx/ilinky"
        />
        <ProjectCard
          backgroundImage={coffeeShop}
          title="Coffee Shop"
          hashtag3="#mobile"
          ViewMore="https://github.com/Alshekizx/coffeeShop"
        />
        <ProjectCard
          backgroundImage={lovejs}
          title="LoveJs"
          hashtag3="#web"
          hashtag2="#3D"
          ViewMore="https://alshekizx.github.io/lovejs/"
        />
        <ProjectCard
          backgroundImage={carjs}
          title="CarJs"
          hashtag2="#Web"
          hashtag3="#3D"
          ViewMore="https://alshekizx.github.io/jsbugatti/"
        />
        <ProjectCard
          backgroundImage={spinjs}
          title="Spin"
          hashtag3="#web"
          ViewMore="https://alshekizx.github.io/foodSpin/"
        />
        <ProjectCard
          backgroundImage={kitchen4}
          title="3d environment"
          hashtag3="#3D"
        />
        <ProjectCard
          backgroundImage={instaPost}
          title="Insta Post"
          hashtag3="#graphic"
          ViewMore=""
        />
        <ProjectCard
          backgroundImage={batman}
          title="3D Models"
          hashtag2="#graphic"
          hashtag3="#3d"
          ViewMore=" https://www.instagram.com/17kanimations/"
        />
        <ProjectCard
          backgroundImage={born2learn}
          title="2d illustrations"
          hashtag3="#graphic"
          ViewMore="https://www.behance.net/oluwaseadeyemi6"
        />
        <ProjectCard
          backgroundImage={Vires}
          title="Logos"
          hashtag3="#graphic"
        />
      </div>
    </div>
  );
}
