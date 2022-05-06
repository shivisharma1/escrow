import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard </span>
        </div>

        <div className="topRight ">
          <span className="logo">OX..2376 </span>
        </div>

        <div className="NavBtn" id="escrowButton">
          <Link className="NavBtnLink" to="/escrowmoney">
            Create New Deal
          </Link>
        </div>
      </div>
    </div>
  );
}
