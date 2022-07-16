import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  //const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const serverPublic = "https://facebook-thenextgen.herokuapp.com/images/";

  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt="cover"
        ></img>
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt="profile"
        ></img>
      </div>

      <div className="ProfileName">
        <span>
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : "Where you work at?"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>

          <div className="vl"></div>

          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
        {location === "profilePage" && <br></br>}
      </div>

      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link to={`/profile/${user._id}`}>My Profile</Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
