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
// import LogoutIcon from "@mui/icons-material/Logout";
import {
  mdiHomeAccount,
  mdiAccountMultiple,
  mdiBriefcaseVariant,
  mdiMessageProcessing,
  mdiBell,
} from "@mdi/js";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { getItem } from "../userFunction";
import { useRef, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function NavBar() {
  // const localDetails = useLocation();
  // console.log("Nav bar", localDetails.state);

  const userRef = useRef(getItem("user"));
  // console.log("nav", userRef);

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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className="NavBar" component="nav" sx={{ background: "#fff" }}>
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
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar
                  alt={userRef?.current?.name}
                  src={userRef?.current?.userPhoto || userRef?.current?.name}
                  sx={{
                    width: 30,
                    height: 30,
                    marginBottom: "2px",
                    backgroundColor: "black",
                  }}
                />
                Me
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>{userRef?.current?.name}</MenuItem>
                <MenuItem onClick={logOutBtn}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
