import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import NavIcon from "../assets/icon.png";
import Icon from "@mdi/react";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  mdiHomeAccount,
  mdiAccountMultiple,
  mdiBriefcaseVariant,
  mdiMessageProcessing,
  mdiBell,
} from "@mdi/js";
import Avatar from "@mui/material/Avatar";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { getItem } from "../userFunction";
import { useRef } from "react";

function NavBar() {
  const localDetails = useLocation();
  // console.log("Nav bar", localDetails.state);

  const userRef = useRef(getItem("user"));

  const navigate = useNavigate();

  const logOutBtn = () => {
    auth
      .signOut()
      .then((res) => {
        navigate("/");
        window.location.reload();
        localStorage.setItem(
          "user",
          JSON.stringify({ ...userRef.current, islogged: false })
        );
        console.log("logout", res);
      })
      .catch((err) => {
        console.error("logout error", err);
      });
  };

  const NavLogo = () => {
    return <img style={{ width: "39px" }} src={NavIcon} alt="logo" />;
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    color: "#85A389",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7C9070",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const buttonStyle = () => ({
    color: "#211f1f",
    display: "flex",
    flexDirection: "column",
    textTransform: "none",
    lineHeight: 1,
    fontSize: "0.8rem",
  });

  return (
    <>
      <AppBar component="nav" sx={{ background: "#fff" }}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-around",
              minHeight: "100%",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <NavLogo />
              <Search sx={{ background: "#DDE6ED" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Button
                sx={buttonStyle}
                onClick={() => {
                  navigate("/home");
                }}
              >
                <Icon path={mdiHomeAccount} size={1} />
                <span>Home</span>
              </Button>

              <Button
                sx={buttonStyle}
                onClick={() => {
                  navigate("/working");
                }}
              >
                <Icon path={mdiAccountMultiple} size={1} />
                My Network
              </Button>

              <Button
                className="navButton"
                sx={buttonStyle}
                onClick={() => {
                  navigate("/working");
                }}
              >
                <Icon path={mdiBriefcaseVariant} size={1} />
                Jobs
              </Button>

              <Button
                className="navButton"
                sx={buttonStyle}
                onClick={() => {
                  navigate("/working");
                }}
              >
                <Icon path={mdiMessageProcessing} size={1} />
                Messaging
              </Button>

              <Button
                className="navButton"
                sx={buttonStyle}
                onClick={() => {
                  navigate("/working");
                }}
              >
                <Icon path={mdiBell} size={1} />
                Notifications
              </Button>

              <Button
                sx={buttonStyle}
                onClick={() => {
                  navigate("/working");
                }}
              >
                <Avatar
                  alt={localDetails?.state?.userName}
                  src={localDetails?.state?.userPhoto}
                  sx={{
                    width: 20,
                    height: 20,
                    marginBottom: "2px",
                    backgroundColor: "black",
                  }}
                />
                Me
              </Button>

              <Button sx={buttonStyle} onClick={logOutBtn}>
                <LogoutIcon />
                Log Out
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
