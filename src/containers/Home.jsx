import React, { useEffect, useState } from "react";
import HomeMain from "../components/HomeMain";
import "../App.css";
import Container from "@mui/material/Container";
// import { useLocation } from "react-router-dom";
import { posts } from "../data";
import { postData } from "../userFunction";

function Home() {
  // const localDetails = useLocation();
  // console.log("Home", localDetails);

  const [prevPosts, setPrevPosts] = useState(postData || posts);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(prevPosts));
  }, [prevPosts]);

  // useEffect(() => {
  //   localStorage.setItem("posts", JSON.stringify(prevPosts));
  // }, [prevPosts]);

  return (
    <Container className="homeContainer" maxWidth="lg" sx={{ paddingTop: 11 }}>
      <HomeMain prevPosts={prevPosts} setPrevPosts={setPrevPosts} />
    </Container>
  );
}

export default Home;
