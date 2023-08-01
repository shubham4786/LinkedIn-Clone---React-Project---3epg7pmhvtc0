import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
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
        <ListItemButton sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <NumbersIcon sx={{ width: "16px" }} />
          </ListItemIcon>
          <ListItemText primary="education" />
        </ListItemButton>
        <ListItemButton sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <NumbersIcon sx={{ width: "16px" }} />
          </ListItemIcon>
          <ListItemText primary="money" />
        </ListItemButton>
        <ListItemButton sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <NumbersIcon sx={{ width: "16px" }} />
          </ListItemIcon>
          <ListItemText primary="personaldevelopment" />
        </ListItemButton>
        <ListItemButton sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <NumbersIcon sx={{ width: "16px" }} />
          </ListItemIcon>
          <ListItemText primary="jobinterviews" />
        </ListItemButton>
      </List>
    </>
  );
};

export default SideBarDown;
