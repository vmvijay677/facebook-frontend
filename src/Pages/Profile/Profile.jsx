import React from "react";
import PostSide from "../../Components/PostSide/PostSide";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import ProfileLeft from "../../Components/ProfileLeft/ProfileLeft";
import RightSide from "../../Components/RightSide/RightSide";
import "./Profile.css";
import Slide from "react-reveal/Slide";

const Profile = () => {
  return (
    <div className="Profile">
      <Slide left>
        <ProfileLeft />
      </Slide>

      <div className="Profile-center">
        <Slide bottom>
          <ProfileCard location="profilePage" />
          <PostSide />
        </Slide>
      </div>

      <Slide right>
        <RightSide />
      </Slide>
    </div>
  );
};

export default Profile;
