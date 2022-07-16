import React, { useState } from "react";
import "./RightSide.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import TrendCard from "../TrendCard/TrendCard";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ShareModal from "../ShareModel/ShareModel";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <div className="navIcons">
        <div
          className="icons"
          style={{ color: "var(--blue)", fontSize: "14px" }}
        >
          <Link to="../home">
            <HomeOutlinedIcon />
          </Link>
        </div>

        <div
          className="icons"
          style={{ color: "var(--location)", fontSize: "14px" }}
        >
          <NotificationsNoneOutlinedIcon />
        </div>

        <div
          className="icons"
          style={{ color: "var(--shedule)", fontSize: "14px" }}
        >
          <SettingsOutlinedIcon />
        </div>

        <div
          className="icons"
          style={{ color: "var(--photo)", fontSize: "14px" }}
        >
          <MessageOutlinedIcon />
        </div>

        <div
          className="icons"
          style={{ color: "var(--video)", fontSize: "14px" }}
        >
          <GroupsRoundedIcon />
        </div>
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
