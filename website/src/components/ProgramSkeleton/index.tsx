import {
  Grid,
  Container,
  Typography,
  Divider,
  Button,
  Skeleton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AboutCard from "@/components/AboutCard";

export default function ProgramSkeleton() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} component="main">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h1" sx={{ mb: 1 }}>
              <Skeleton />
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Skeleton />
            <Typography variant="h6" sx={{ mb: 1 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index: number) => (
                <Skeleton key={index} />
              ))}
            </Typography>
            <Divider sx={{ p: 1, mb: 5 }} />
            <Skeleton variant="rectangular" width={"100%"} height={200} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              item
              xs={12}
              sx={{ p: 3, boxShadow: 5 }}
              border="1px dashed lightgreen"
            >
              <Typography
                variant="h6"
                color="text.secondary"
                textAlign={"center"}
                sx={{ mb: 1 }}
              >
                <b>Available Solutions</b>
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  color="success"
                  sx={{ mt: 2 }}
                  style={{ width: "100%" }}
                >
                  <AddIcon sx={{ mr: 1 }} />
                  Add Solution
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ p: 3, my: 3, boxShadow: 5 }}
              border="1px dashed lightgreen"
            >
              <Typography
                variant="h6"
                color="text.secondary"
                textAlign={"center"}
                sx={{ mb: 1 }}
              >
                <b>💖 Contributors 💖</b>
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={5}>
                <Grid item xs={1}>
                  <Skeleton
                    variant="circular"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Skeleton
                    variant="circular"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Skeleton
                    variant="circular"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Skeleton
                    variant="circular"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Skeleton
                    variant="circular"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Skeleton
                    variant="circular"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Skeleton
                    variant="circular"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Skeleton
                    variant="circular"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ p: 3, my: 3, boxShadow: 5 }}
              border="1px dashed lightgreen"
            >
              <AboutCard />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
