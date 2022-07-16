import React, { useState } from "react";
import "./Post.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { useSelector } from "react-redux";
import { likePost } from "../../Api/PostRequest";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="Post">
      <img
        src={
          data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : " "
        }
        alt=""
      ></img>

      <div className="postReact">
        <div
          className="option"
          style={{ color: "var(--location)", fontSize: "14px" }}
          onClick={handleLike}
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />} &nbsp;Like
        </div>

        <div
          className="option"
          style={{ color: "var(--photo)", fontSize: "14px" }}
        >
          <InsertCommentOutlinedIcon /> &nbsp;Comment
        </div>

        <div
          className="option"
          style={{ color: "var(--video)", fontSize: "14px" }}
        >
          <ShareIcon /> &nbsp;Share
        </div>
      </div>

      <span style={{ color: "var(--gray)", fontSize: "16px" }}>
        <b>{likes}</b> likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
