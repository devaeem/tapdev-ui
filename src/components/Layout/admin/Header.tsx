"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import ClearIcon from "@mui/icons-material/Clear";
export default function Header({ setExpanded, expanded }: any) {
  const handleOnopen = () => {
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg-slate-500">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOnopen}
            >
              {expanded ? <ClearIcon /> : <MenuIcon />}
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <IconButton>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
