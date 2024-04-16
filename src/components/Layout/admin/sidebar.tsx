"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InboxIcon from "@mui/icons-material/Inbox";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  ListSubheader,
  Drawer,
} from "@mui/material";
import Link from "next/link";
import AnimationRoundedIcon from "@mui/icons-material/AnimationRounded";
export default function sidebar({ setExpanded, expanded }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("pathname", pathname);
  }, [pathname]);

  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/dashboard",
          icon: <DashboardIcon />,
          text: "Dashboard",
        },
        {
          link: "/inbox",
          icon: <InboxIcon />,
          text: "Inbox",
        },
      ],
    },

    {
      group: "Settings",
      items: [
        {
          link: "/log",
          icon: <WebStoriesIcon />,
          text: "Log",
        },
        {
          link: "/users",
          icon: "4",
          text: "Users",
        },
      ],
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuList.map((data, idx) => (
          <>
            <ListSubheader
              key={idx}
              className={`text-gray-700  flex items-center px-2 py-1 text-lg font-semibold rounded-md ${
                idx === 0 ? "" : "mt-4"
              } `}
            >
              {data.group}
            </ListSubheader>
            {data.items.map((item, idx) => (
              <>
                <Link href={item.link}>
                  <ListItem
                    key={idx}
                    className={`${
                      pathname === item.link ? "bg-gray-700 text-white " : ""
                    }`}
                    // className="flex items-center px-4 py-3 text-sm font-semibold rounded-md"
                  >
                    <ListItemButton className="hover:bg-slate-500 hover:text-white  w-full">
                      <ListItemIcon>
                        <div
                          className={`${
                            pathname === item.link ? " text-white" : ""
                          }`}
                        >
                          {item.icon}
                        </div>
                      </ListItemIcon>

                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </>
            ))}
          </>
        ))}
        {/* <Divider className="mt-5" /> */}
      </List>
    </Box>
  );
  return (
    <>
      <div className="min-h-screen ">
        <div className="flex  justify-between items-center  gap-2  p-4  ">
          <div className="flex justify-center items-center w-full gap-2">
            <Typography variant="h5" className=" font-bold font-weight-bold">
              <AnimationRoundedIcon />
              TAP-UI
            </Typography>
          </div>
        </div>
        <Divider />
        <div>{DrawerList}</div>
      </div>
    </>
  );
}
