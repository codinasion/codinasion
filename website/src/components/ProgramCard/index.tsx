import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

type programType = {
  slug: string;
  title: string;
  trackId: number;
  tags: string[];
  contributors: string[];
  latestUpdateDate: string;
};

type PropsType = {
  programData: programType;
};

export default function ProgramCard({ programData }: PropsType) {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          boxShadow: 5,
          mb: 1,
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h5">
              <b>{programData.title}</b>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                my: 1,
              }}
            >
              {programData.tags.length > 0 ? (
                programData.tags.map((tag: string, index: number) => (
                  <Chip
                    key={index}
                    label={`${tag}`}
                    variant="filled"
                    color="success"
                    size="small"
                    style={{ margin: "5px" }}
                  />
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No Solution Available
                </Typography>
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                my: 1,
              }}
            >
              <b>Contributors:</b> {programData.contributors.length}
              {" | "}
              <b>Last Updated:</b>{" "}
              {new Date(programData.latestUpdateDate).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
