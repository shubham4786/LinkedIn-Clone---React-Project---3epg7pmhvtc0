import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NumbersIcon from "@mui/icons-material/Numbers";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const AsideBar = () => {
  const newsStyle = {
    fontSize: "13px",
    fontWeight: 600,
  };
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
            LinkedIn News
          </ListSubheader>
        }
      >
        <ListItem sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <FiberManualRecordIcon sx={{ fontSize: "12px" }} />
          </ListItemIcon>
          <ListItemText>
            <span style={newsStyle}>Driving social impact at scale</span>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <FiberManualRecordIcon sx={{ fontSize: "12px" }} />
          </ListItemIcon>
          <ListItemText>
            <span style={newsStyle}>MNCs on tech hiring spree</span>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <FiberManualRecordIcon sx={{ fontSize: "12px" }} />
          </ListItemIcon>
          <ListItemText>
            <span style={newsStyle}>Real estate crunch hits retail</span>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <FiberManualRecordIcon sx={{ fontSize: "12px" }} />
          </ListItemIcon>
          <ListItemText>
            <span style={newsStyle}>Succeeding as a social entrepreneur</span>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: "2px 10px" }}>
          <ListItemIcon sx={{ minWidth: "20px" }}>
            <FiberManualRecordIcon sx={{ fontSize: "12px" }} />
          </ListItemIcon>
          <ListItemText>
            <span style={newsStyle}>Benefits of early career volunteering</span>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default AsideBar;
