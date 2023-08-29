import React, { useRef, useState } from "react";
import logo from "../assets/icon.png";
import gLogo from "../assets/googleLogo.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getItem } from "../userFunction";

const HeaderLogo = () => {
  return <img src={logo} alt="logo" />;
};

function Login() {
  const navigate = useNavigate();

  const userRef = useRef(getItem("user"));

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const { email, password } = loginDetails;

  const onLoginClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log("result", result);
        const userName = result.user.displayName;
        const userEmail = result.user.email;
        const userPhoto = result.user.photoURL;
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: userName,
            email: userEmail,
            password: "123456",
            islogged: true,
            userPhoto: userPhoto,
          })
        );

        navigate("/home");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (email !== userRef.current?.email) {
      emailRef.current.style.outlineColor = "red";
      emailRef.current.focus();
      emailErrorRef.current.style.display = "block";
    }
    if (password !== userRef.current?.password) {
      passwordRef.current.style.outlineColor = "red";
      passwordRef.current.focus();
      passwordErrorRef.current.style.display = "block";
    }
    if (
      email === userRef.current?.email &&
      password === userRef.current?.password
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userRef.current, islogged: true })
      );
      navigate("/home");
    }
  };

  const handleLoginDetails = (event) => {
    const field = event.target.id;
    const value = event.target.value;

    setLoginDetails({
      ...loginDetails,
      [field]: value,
    });

    emailErrorRef.current.style.display = "none";
    passwordErrorRef.current.style.display = "none";
  };

  return (
    <>
      <div
        style={{
          background: "#f3ecec",
          paddingBottom: "4rem",
          paddingTop: "1rem",
        }}
      >
        <Container>
          <div className="headerLogo">
            <span
              style={{ fontSize: "30px", fontWeight: "700", color: "#0a66c2" }}
            >
              Linked
            </span>
            <HeaderLogo />
          </div>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="signInForm">
              <div className="signInHeading">Sign In</div>
              <span style={{ padding: "5px 10px", textAlign: "center" }}>
                Stay updated on your professional world
              </span>
              <form
                onSubmit={handleLogin}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleLoginDetails}
                  value={email}
                  ref={emailRef}
                  className="textField"
                />
                <div id="email_error" ref={emailErrorRef}>
                  The email address you entered isn't registered or incorrrect
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleLoginDetails}
                  ref={passwordRef}
                  value={password}
                  className="textField"
                />
                <div id="pass_error" ref={passwordErrorRef}>
                  Enter valid password
                </div>

                {/* <Button
                style={{ padding: "5px", margin: "5px", width: "50%" }}
                variant="text"
              >
                Forgot password?
              </Button> */}
                <Button type="submit" variant="contained">
                  Sign In
                </Button>
              </form>

              <Button variant="outlined" onClick={onLoginClick}>
                <img
                  style={{ width: "25px", margin: "0 10px" }}
                  src={gLogo}
                  alt=""
                />
                Continue with Google
              </Button>

              <span style={{ textAlign: "center" }}>
                New to LinkedIn?
                <Button
                  style={{
                    margin: "15px 5px",
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Join now
                </Button>
              </span>
            </div>
          </Box>
          <div></div>
        </Container>
      </div>
      <div
        className="loginFooter"
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <span className="footer">Linkedin</span>
        <span className="footer">© 2023</span>
        <span className="footer">About</span>
        <span className="footer">Accessibility</span>
        <span className="footer">Privacy Policy</span>
        <span className="footer">Cookie Policy</span>
      </div>
    </>
  );
}

export default Login;
