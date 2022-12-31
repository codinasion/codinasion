import { Typography, Box, Grid, Chip, Breadcrumbs } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";

import Link from "@/components/Link";

type PropsType = {
  slug: string;
};

function Breadcrump({ slug }: PropsType) {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/"
              >
                <CodeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                <Typography component="h5">Program</Typography>
              </Link>
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <Typography component="h5">{slug}</Typography>
              </Typography>
            </Breadcrumbs>
          </Grid>

          <Grid item xs={12} md={4}>
            <Link
              href={`https://github.com/codinasion/program/blob/master/program/${slug}/`}
            >
              <Chip
                icon={<EditIcon />}
                label="Edit in Github"
                variant="outlined"
                clickable
                color="primary"
                size="small"
                style={{ margin: "5px" }}
              />
            </Link>
            <Link
              href={`https://github.com/codinasion/program/issues/new?assignees=harshraj8843&labels=bug&template=bug.yml&title=Issue%20in%20${slug}&description=Found%20a%20bug%20here%20%F0%9F%91%89%F0%9F%8F%BB%20https://program.codinasion.org/${slug}`}
            >
              <Chip
                icon={<BugReportIcon />}
                label="Log an issue"
                variant="outlined"
                clickable
                color="primary"
                size="small"
                style={{ margin: "5px" }}
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Breadcrump;
