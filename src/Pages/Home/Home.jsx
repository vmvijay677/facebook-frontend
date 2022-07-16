import React from "react";
import PostSide from "../../Components/PostSide/PostSide";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";
import RightSide from "../../Components/RightSide/RightSide";
import "./Home.css";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="Home">
      <Slide left>
        <ProfileSide />
      </Slide>

      <Slide bottom>
        <PostSide />
      </Slide>

      <Slide right>
        <RightSide />
      </Slide>
    </div>
  );
};

export default Home;
