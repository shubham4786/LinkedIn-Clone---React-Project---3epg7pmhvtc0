import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getItem } from "../userFunction";

const Layout = (props) => {
  const navigate = useNavigate();
  const userRef = useRef(getItem("user"));

  const islogged = userRef.current?.islogged;
  // console.log("layout islogged", islogged);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log("layout", user);
      if (!user && !islogged) {
        navigate("/");
      }
    });
  }, []);
  return (
    <>
      <div className="Home" style={{ background: "#f3f2ef", marginTop: 0 }}>
        <NavBar />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
