import { Typography } from "@mui/material";

import Link from "@/components/Link";

type FooterTextProps = {
  sx?: any;
};

export default function FooterText(props: FooterTextProps) {
  return (
    <Typography
      variant="body1"
      color="text.secondary"
      align="center"
      {...props}
    >
      <b className="footer-text">
        {"Made with ❤️ by "}
        <Link color="inherit" href="https://github.com/codinasion">
          Codinasion
        </Link>
      </b>
    </Typography>
  );
}
