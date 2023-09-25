import React, { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import TodayIcon from "@mui/icons-material/Today";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import { useLocation } from "react-router-dom";
import { getItem } from "../userFunction";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const MainBar = ({ prevPosts, setPrevPosts }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [postContent, setPostContent] = useState("");

  // const localDetails = useLocation();
  // console.log("Main Bar", localDetails.state);

  const userRef = useRef(getItem("user"));

  const handlePost = (event) => {
    if (postContent !== "") {
      setPrevPosts([
        {
          id: prevPosts.length + 1,
          postedBy: userRef?.current?.name,
          postText: postContent,
          likes: 0,
          comments: [],
        },
        ...prevPosts,
      ]);
    }
    setPostContent("");
    // console.log(postContent);
    handleClose();
    window.location.reload();
  };

  const btnStyle = {
    textTransform: "none",
    flexWrap: "wrap",
    pointerEvents: "none",
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Avatar
          alt={userRef?.current?.name}
          src={userRef?.current?.userPhoto || userRef?.current?.name}
          sx={{ width: 50, height: 50, margin: "2px" }}
        />
        <Button
          style={{
            borderRadius: "35px",
            width: "100%",
            margin: "2px",
            border: "1px solid rgba(0, 0, 0, 0.3)",
            color: "rgba(0,0,0,0.4)",
            fontWeight: 600,
            justifyContent: "left",
            textTransform: "none",
          }}
          onClick={handleOpen}
        >
          Start a post
        </Button>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="postModel">
            <Box sx={{ display: "flex" }}>
              <Avatar
                alt={userRef?.current?.name}
                src={userRef?.current?.userPhoto || userRef?.current?.name}
                sx={{ width: 50, height: 50, margin: "5px" }}
              />
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  textTransform: "capitalize",
                }}
              >
                {userRef?.current?.name}
              </span>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <textarea
                  type="text"
                  style={{
                    width: "95%",
                    minHeight: "5rem",
                    background: "#ebeae8b3",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: "400",
                    padding: "1rem",
                    fontFamily: "sans-serif",
                  }}
                  placeholder="What do you want to post?"
                  onChange={(e) => {
                    setPostContent(e.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1rem",
                }}
              >
                <Button
                  onClick={handlePost}
                  variant="contained"
                  sx={{ width: "7rem" }}
                >
                  Post
                </Button>
              </div>
            </Box>
          </Box>
        </Modal>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "5px",
        }}
      >
        <Button sx={btnStyle}>
          <PhotoSizeSelectActualOutlinedIcon
            sx={{ color: "#378fe9", paddingRight: "5px" }}
          />
          <span style={{ color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>
            Photo
          </span>
        </Button>
        <Button sx={btnStyle}>
          <SmartDisplayIcon sx={{ color: "#5f9b41", paddingRight: "5px" }} />
          <span style={{ color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>
            Video
          </span>
        </Button>
        <Button sx={btnStyle}>
          <TodayIcon sx={{ color: "#c37d16", paddingRight: "5px" }} />
          <span style={{ color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>
            Event
          </span>
        </Button>
        <Button sx={btnStyle}>
          <FeedOutlinedIcon sx={{ color: "#e16745", paddingRight: "5px" }} />
          <span style={{ color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>
            Write Article
          </span>
        </Button>
      </div>
    </>
  );
};

export default MainBar;
