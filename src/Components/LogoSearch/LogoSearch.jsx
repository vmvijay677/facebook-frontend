import React from "react";
import "./LogoSearch.css";
import SearchIcon from "@mui/icons-material/Search";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img
        className="logoImage"
        src="https://westwind.org/wp-content/uploads/2018/11/facebook-logo-png.png"
        alt="logo"
      ></img>
      <div className="Search">
        <input type="text" placeholder="#Explore"></input>
        <div className="s-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
