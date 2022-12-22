import { Typography, Divider, Button } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

import siteMetaData from "@/data/siteMetaData";

import Link from "@/components/Link";

export default function AboutCard() {
  return (
    <>
      <Typography
        variant="h6"
        color="text.secondary"
        textAlign={"center"}
        sx={{ mb: 1 }}
      >
        <b>ABOUT</b>
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign={"center"}
        sx={{ mb: 1 }}
      >
        <b className="footer-text">{siteMetaData.description}</b>
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign={"center"}
        sx={{ mb: 1 }}
      >
        <b>Support this project by starring it on GitHub.</b>
      </Typography>
      <Link href="https://github.com/codinasion/program">
        <Button
          variant="outlined"
          color="success"
          sx={{ mt: 2 }}
          style={{ width: "100%" }}
        >
          <GitHubIcon sx={{ mr: 1 }} />
          Star on GitHub
        </Button>
      </Link>
    </>
  );
}
