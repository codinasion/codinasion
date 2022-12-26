import { Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

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
      style={{
        verticalAlign: "middle",
      }}
    >
      <b className="footer-text">
        <CodeIcon
          fontSize="medium"
          style={{
            verticalAlign: "middle",
          }}
        />
        {" with ❤️ by "}
        <Link color="inherit" href="https://github.com/codinasion">
          Codinasion
        </Link>
      </b>
    </Typography>
  );
}
