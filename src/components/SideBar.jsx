import React, { useRef } from "react";
import profilrbg from "../assets/sidebar/bg.svg";
import Avatar from "@mui/material/Avatar";
import BookmarkIcon from "@mui/icons-material/Bookmark";
// import { useLocation } from "react-router-dom";
import { getItem } from "../userFunction";

const SideBar = () => {
  // const localDetails = useLocation();
  // console.log("Side bar", localDetails.state);
  const userRef = useRef(getItem("user"));
  return (
    <>
      <img
        src={profilrbg}
        style={{ borderTopRightRadius: "4px", borderTopLeftRadius: "4px" }}
        alt=""
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-41px",
        }}
      >
        <Avatar
          alt={userRef?.current?.name}
          src={userRef?.current?.userPhoto || userRef?.current?.name}
          sx={{ width: 70, height: 70 }}
        />
      </div>
      <div style={{ padding: "10px 0" }}>
        <div
          style={{
            fontSize: "16px",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          {userRef?.current?.name}
        </div>
        <div>DSA | HTML | CSS | Javascript | Java</div>
      </div>
      <div style={{ padding: "10px 20px", borderTop: "0.5px solid #A8A196" }}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "5px",
          }}
        >
          <span>Who's viewed your profile</span>
          <span>92</span>
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "5px",
          }}
        >
          <span>Connections</span>
          <span>1248</span>
        </div>
      </div>
      <div
        style={{
          borderTop: "0.5px solid #A8A196",
          fontSize: "12px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <BookmarkIcon />
        <span>My items</span>
      </div>
    </>
  );
};

export default SideBar;
