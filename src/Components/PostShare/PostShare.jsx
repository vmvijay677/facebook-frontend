import React, { useState, useRef } from "react";
import "./PostShare.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../Actions/UploadAction";
import { uploadPost } from "../../Actions/UploadAction";

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);

  const [image, setImage] = useState(null);

  const imageRef = useRef();

  const dispatch = useDispatch();

  const desc = useRef();

  const { user } = useSelector((state) => state.authReducer.authData);

  //const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const serverPublic = "https://facebook-thenextgen.herokuapp.com/images/";

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();

      const filename = Date.now() + image.name;

      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      //console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };

  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.jpg"
        }
        alt=""
      ></img>

      <div>
        <input
          ref={desc}
          required
          type="text"
          placeholder="What's happening?"
        ></input>
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <PhotoCameraOutlinedIcon />
            Photo
          </div>

          <div className="option" style={{ color: "var(--video)" }}>
            <VideocamOutlinedIcon />
            Video
          </div>

          <div className="option" style={{ color: "var(--location)" }}>
            <LocationOnOutlinedIcon />
            Location
          </div>

          <div className="option" style={{ color: "var(--shedule)" }}>
            <CalendarMonthIcon />
            Schedule
          </div>

          <button
            disabled={loading}
            className="button ps-button"
            onClick={handleSubmit}
          >
            {loading ? "Uploading" : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            ></input>
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <CloseOutlinedIcon onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt=""></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
