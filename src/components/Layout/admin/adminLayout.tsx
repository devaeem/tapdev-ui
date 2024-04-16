"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SideBar from "./sidebar";
import Header from "./Header";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function adminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded, setExpanded] = useState(true);

  console.log("expanded ", expanded);
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          {expanded ? (
            <SideBar setExpanded={setExpanded} expanded={expanded} />
          ) : null}
        </div>

        <main className="grid w-full  ">
          <div className="bg-gray-300">
            <Header setExpanded={setExpanded} expanded={expanded} />
          </div>

          <div className="p-8 bg-slate-100 min-h-screen">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                MUI
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Typography color="text.primary">
                {pathname.split("/").join(" ")}
              </Typography>
            </Breadcrumbs>

            {children}
          </div>
        </main>
      </div>
    </>
  );
}
