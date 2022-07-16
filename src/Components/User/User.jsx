import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../Actions/UserAction";

const User = ({ person }) => {
  const dispatch = useDispatch();

  //const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const serverPublic = "https://facebook-thenextgen.herokuapp.com/images/";

  const { user } = useSelector((state) => state.authReducer.authData);

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );

  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

  return (
    <div className="follower">
      <div>
        <img
          src={
            person.coverPicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt="follower"
          className="followerImage"
        ></img>
        <div className="name">
          <span>
            {person.firstname} {person.lastname}
          </span>
          <span>
            from {person.livesin}, {person.country}
          </span>
        </div>
      </div>
      <button className="button fc-button" onClick={handleFollow}>
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
