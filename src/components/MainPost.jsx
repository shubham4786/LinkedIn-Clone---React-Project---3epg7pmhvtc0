import React, { useEffect, useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import { useLocation } from "react-router-dom";
import { getItem } from "../userFunction";
import CloseIcon from "@mui/icons-material/Close";

const MainPost = ({ post, prevPosts, setPrevPosts, index }) => {
  const [likes, setLikes] = useState(false);
  const [likeColor, setLikeColor] = useState("black");
  // const [likesCount, setLikesCount] = useState(post.likes);
  const [commentClass, setCommentClass] = useState("commentsDisable");
  const [newComment, setNewComment] = useState("");

  // const localDetails = useLocation();
  // console.log("Main Bar", localDetails.state);

  const userRef = useRef(getItem("user"));

  const handleLikeBtn = (like_id) => {
    setLikes(!likes);
    // if (!likes) {
    //   setLikesCount((count) => count + 1);
    // } else {
    //   setLikesCount((count) => count - 1);
    // }

    // setPrevPosts()

    let newdata = [];
    prevPosts.map((posts) => {
      if (posts.id == like_id) {
        // console.log(posts);
        // console.log(likesCount);
        if (!likes) {
          posts = {
            ...posts,
            likes: post.likes + 1,
          };
        } else {
          posts = {
            ...posts,
            likes: post.likes - 1,
          };
        }
      }

      newdata = [...newdata, posts];
    });
    setPrevPosts(newdata);
    // console.log(newdata);
  };
  useEffect(() => {
    setLikeColor(likes ? "#0a66c2" : "black");
    // console.log(likesCount);
  }, [likes]);

  const handleCommentBtn = () => {
    setCommentClass("commentsEnable");
  };

  const handleCommentPost = (comment_id) => {
    // console.log(comment_id);
    // console.log(newComment);

    prevPosts.map((posts) => {
      if (posts.id == comment_id) {
        // console.log(posts);
        posts.comments = [
          {
            by: userRef?.current?.name,
            comment: newComment,
          },
          ...posts.comments,
        ];
      }
    });

    setPrevPosts([...prevPosts]);
    setNewComment("");
    // window.location.reload();
  };

  const buttonStyle = () => ({
    color: "#211f1f",
    display: "flex",
    textTransform: "none",
    lineHeight: 1,
    fontSize: "0.8rem",
    padding: "10px",
    flexWrap: "wrap",
  });

  const handleDelete = (deleteId) => {
    // console.log(deleteId);
    const data = prevPosts.filter((item) => item.id !== deleteId);
    setPrevPosts(data);
  };

  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
      >
        <Avatar
          alt={post.postedBy}
          src={post.postedBy}
          sx={{ width: 45, height: 45, margin: "4px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span style={{ color: "rgba(0,0,0,0.7)", fontWeight: 600 }}>
            {post.postedBy}
          </span>
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={() => handleDelete(post.id)}
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div
        style={{
          textAlign: "justify",
          padding: "15px",
          fontFamily: "inherit",
          fontWeight: "bold",
        }}
      >
        {post.postText}
      </div>
      <div
        style={{
          margin: "10px",
          borderTop: "0.2px solid #dddad4ab",
        }}
      >
        {/* {console.log(post)} */}
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button sx={buttonStyle} onClick={() => handleLikeBtn(post.id)}>
            <span> {post.likes} </span>
            <ThumbUpAltIcon sx={{ padding: "0 5px", color: likeColor }} />
            Like
          </Button>

          <Button sx={buttonStyle} onClick={handleCommentBtn}>
            <SmsOutlinedIcon sx={{ paddingRight: "5px" }} />
            Comment
          </Button>

          <Button sx={buttonStyle} style={{ pointerEvents: "none" }}>
            <RepeatOutlinedIcon sx={{ paddingRight: "5px" }} />
            Repost
          </Button>

          <Button sx={buttonStyle} style={{ pointerEvents: "none" }}>
            <SendOutlinedIcon sx={{ paddingRight: "5px" }} />
            Send
          </Button>
        </Box>
      </div>

      <div className={commentClass}>
        <div
          style={{
            margin: "10px",
            display: "flex",
          }}
        >
          <Avatar
            alt={userRef?.current?.name}
            src={userRef?.current?.userPhoto || userRef?.current?.name}
            sx={{ width: 35, height: 35, margin: "4px" }}
          />
          <input
            type="text"
            style={{
              borderRadius: "35px",
              margin: "4px",
              width: "100%",
              padding: "10px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
            }}
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
          <Button
            style={{
              borderRadius: "35px",
              width: "25%",
              padding: "10px",
              margin: "2px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              color: "rgba(0,0,0,0.4)",
              fontWeight: 600,
            }}
            onClick={() => handleCommentPost(post.id)}
          >
            Post
          </Button>
        </div>

        {post.comments.map((com, index) => {
          return (
            <div
              key={index}
              style={{
                margin: "15px",
                // display: "flex",
                background: "#ebe6e6",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <Avatar
                  alt={com.by}
                  src={com.by}
                  sx={{ width: 35, height: 35, margin: "4px" }}
                />
                <div>
                  <span style={{ color: "rgba(0,0,0,0.7)", fontWeight: 600 }}>
                    {com.by}
                  </span>
                </div>
              </div>
              <span
                style={{
                  display: "flex",
                  textAlign: "justify",
                  alignItems: "center",
                  padding: "0px 5px 5px 50px",
                  color: "black",
                }}
              >
                {com.comment}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPost;
