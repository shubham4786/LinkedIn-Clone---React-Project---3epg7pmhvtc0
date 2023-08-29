import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NumbersIcon from "@mui/icons-material/Numbers";

const SideBarDown = () => {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ textAlign: "left", fontWeight: 600, lineHeight: "30px" }}
          >
            Recent
          </ListSubheader>
        }
      >
        <ListItem sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <NumbersIcon sx={{ width: "16px" }} />
          </ListItemIcon>
          <ListItemText primary="education" />
        </ListItem>
        <ListItem sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <NumbersIcon sx={{ width: "16px" }} />
          </ListItemIcon>
          <ListItemText primary="money" />
        </ListItem>
        <ListItem sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <NumbersIcon sx={{ width: "16px" }} />
          </ListItemIcon>
          <ListItemText primary="personaldevelopment" />
        </ListItem>
        <ListItem sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <NumbersIcon sx={{ width: "16px" }} />
          </ListItemIcon>
          <ListItemText primary="jobinterviews" />
        </ListItem>
      </List>
    </>
  );
};

export default SideBarDown;
