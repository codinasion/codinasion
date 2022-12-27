import { GlobalStyles, Container } from "@mui/material";

import FooterText from "@/components/Footer/FooterText";

function Footer() {
  return (
    <>
      <GlobalStyles
        styles={{
          ul: { margin: 0, padding: 0, listStyle: "none" },
        }}
      />
      <Container
        maxWidth="xl"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 4,
          py: [3, 6],
        }}
        className="footer"
      >
        <FooterText sx={{ my: 1 }} />
      </Container>
    </>
  );
}

export default Footer;
