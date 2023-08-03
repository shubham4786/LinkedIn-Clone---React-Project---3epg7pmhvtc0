import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import SideBar from "./SideBar";
import SideBarDown from "./SideBarDown";
import AsideBar from "./AsideBar";
import MainBar from "./MainBar";
import MainPost from "./MainPost";
// import { postData } from "../userFunction";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #e3ded6",
  margin: "5px",
}));

function HomeMain({ prevPosts, setPrevPosts }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={4} md={4} lg={3}>
          <Item sx={{ padding: 0 }}>
            <SideBar />
          </Item>
          <Item>
            <SideBarDown />
          </Item>
        </Grid>
        <Grid xs={12} sm={8} md={8} lg={6}>
          <Item>
            <MainBar prevPosts={prevPosts} setPrevPosts={setPrevPosts} />
          </Item>
          {prevPosts.map((post, index) => {
            return (
              <Item key={index}>
                <MainPost
                  index={index}
                  post={post}
                  prevPosts={prevPosts}
                  setPrevPosts={setPrevPosts}
                />
              </Item>
            );
          })}
        </Grid>
        <Grid xs={12} sm md lg={3}>
          <Item>
            <AsideBar />
          </Item>
          {/* <Item>xs</Item> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeMain;
