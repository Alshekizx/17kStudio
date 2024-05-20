import React from "react";
import "./Project.css";
import useScrollToTop from "./scrollToTop";

import { ProjectCard } from "./canvas";

export default function Project() {
  useScrollToTop();
  return (
    <div className="ProjectDiv">
      <div className="ProjectDiv2">
        <h2>EXPLORE A SELECTION OF MY WORK FOR CLIENTS</h2>
        <div className="ProjectEmpty" />
      </div>
      <div className="ProjectDivLine" />
      <div className="ProjectCardDiv">
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2FIlinky.png?alt=media&token=8547ab38-1da4-4293-b097-6c491bf4a566"
          title="Ilinky"
          hashtag3="#mobile"
          ViewMore="https://github.com/Alshekizx/ilinky"
        />
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2FcoffeeShop.png?alt=media&token=ee7f07af-3d1c-482d-a3bd-6662728fd1ec"
          title="Coffee Shop"
          hashtag3="#mobile"
          ViewMore="https://github.com/Alshekizx/coffeeShop"
        />
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2Flovejs.png?alt=media&token=37207edf-8977-49cd-ab7c-3183026c6da2"
          title="LoveJs"
          hashtag3="#web"
          hashtag2="#3D"
          ViewMore="https://alshekizx.github.io/lovejs/"
        />
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2Fcarjs.png?alt=media&token=d7cf8101-1134-49b6-a075-2ec73de7df6b"
          title="CarJs"
          hashtag2="#Web"
          hashtag3="#3D"
          ViewMore="https://alshekizx.github.io/jsbugatti/"
        />
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2Fspinjs.png?alt=media&token=90e88997-7cc6-4615-bee8-56be2321a5b4"
          title="Spin"
          hashtag3="#web"
          ViewMore="https://alshekizx.github.io/foodSpin/"
        />
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2Fkitchen4.png?alt=media&token=da0a2b90-482e-4c05-b99a-30075b5e9bfa"
          title="3d environment"
          hashtag3="#3D"
        />
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2FinstaPost.png?alt=media&token=f02fe90e-d439-4a98-822b-5a047a365700"
          title="Insta Post"
          hashtag3="#graphic"
          ViewMore=""
        />
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2Fbatman4.png?alt=media&token=9c734bac-eb47-42dd-8c92-e844547687ce"
          title="3D Models"
          hashtag2="#graphic"
          hashtag3="#3d"
          ViewMore=" https://www.instagram.com/17kanimations/"
        />
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2Fborn2learn.jpg?alt=media&token=954553b5-e29e-47b7-9720-b7e426041670"
          title="2d illustrations"
          hashtag3="#graphic"
          ViewMore="https://www.behance.net/oluwaseadeyemi6"
        />
        <ProjectCard
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2FVires.png?alt=media&token=74b7a3be-d572-4a31-9834-30ad6ea92f74"
          title="Logos"
          hashtag3="#graphic"
        />
      </div>
    </div>
  );
}
