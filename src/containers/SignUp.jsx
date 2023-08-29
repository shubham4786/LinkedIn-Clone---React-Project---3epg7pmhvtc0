import React, { useRef, useState } from "react";
import logo from "../assets/icon.png";
import gLogo from "../assets/googleLogo.png";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const HeaderLogo = () => {
  return <img src={logo} alt="logo" />;
};

const SignUp = () => {
  const navigate = useNavigate();

  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = signupDetails;

  const nameErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const emailErrorRef = useRef(null);

  const onLoginClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log("result", result);
        const userName = result.user.displayName;
        const userPhoto = result.user.photoURL;
        navigate("/home", {
          state: {
            userName,
            userPhoto,
          },
        });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const namePattern = /^[a-zA-Z ]{3,30}$/;
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!name.match(namePattern)) {
      nameErrorRef.current.style.display = "block";
    }
    if (!email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (!password.match(passwordPattern)) {
      passwordErrorRef.current.style.display = "block";
    }

    if (
      name.match(namePattern) &&
      email.match(emailPattern) &&
      password.match(passwordPattern)
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: name,
          email: email,
          password: password,
          islogged: true,
        })
      );

      navigate("/home", {
        state: {
          userName: name,
        },
      });
    }
  };

  const handleSignupDetails = (event) => {
    const field = event.target.id;
    const value = event.target.value;

    setSignupDetails({
      ...signupDetails,
      [field]: value,
    });

    nameErrorRef.current.style.display = "none";
    emailErrorRef.current.style.display = "none";
    passwordErrorRef.current.style.display = "none";
  };
  return (
    <>
      <div style={{ background: "#f3ecec", paddingBottom: "2rem" }}>
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
            <span style={{ fontSize: "25px", paddingBottom: "1rem" }}>
              Make the most of your professional life
            </span>
            <div className="signUpForm">
              <div className="signUpHeading">Sign Up</div>
              <form
                onSubmit={handleSignUp}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  onChange={handleSignupDetails}
                  value={name}
                />
                <div id="name_error" ref={nameErrorRef}>
                  Enter your valid name
                </div>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleSignupDetails}
                />
                <div id="email_error" ref={emailErrorRef}>
                  Enter valid email address
                </div>

                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleSignupDetails}
                  value={password}
                />
                <div id="pass_error" ref={passwordErrorRef}>
                  Password must contain atleast 6 characters
                </div>

                <Button type="submit" variant="contained">
                  Sign Up
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
                Already on LinkedIn?
                <Button
                  style={{
                    margin: "15px 5px",
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                  onClick={() => navigate("/")}
                >
                  Sign in
                </Button>
              </span>
            </div>
          </Box>
          <div></div>
        </Container>
      </div>
      <div
        className="signUpFooter"
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
};

export default SignUp;
