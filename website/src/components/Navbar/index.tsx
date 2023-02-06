import React from "react";

import {
  AppBar,
  Box,
  Fab,
  Toolbar,
  Typography,
  useTheme,
  useScrollTrigger,
  Zoom,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import siteMetaData from "@/data/siteMetaData";

import Link from "@/components/Link";

type ScrollTopProps = {
  children: React.ReactElement;
  window?: () => Window;
};

function ScrollTop({ children, window }: ScrollTopProps) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      event.target as HTMLDivElement
    ).ownerDocument?.querySelector("#back-to-top");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function Navbar() {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          backdropFilter: "blur(20px)",
          textAlign: "center",
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h4"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, my: 2 }}
          >
            <Link
              href={`/`}
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
              className="logo"
            >
              <b>{siteMetaData.title}</b>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div id="back-to-top" />
      <ScrollTop>
        <Fab color="success" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
