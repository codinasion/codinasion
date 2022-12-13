import * as React from "react";

import {
  Box,
  Grid,
  Container,
  Typography,
  Chip,
  Divider,
  Pagination,
} from "@mui/material";

import ProgramCard from "@/components/ProgramCard";
import Link from "@/components/Link";
import AboutCard from "@/components/AboutCard";

type programType = {
  slug: string;
  title: string;
  trackId: number;
  tags: string[];
  contributors: string[];
  latestUpdateDate: string;
};

type PropsType = {
  programsData: programType[];
};

type tagType = {
  name: string;
  count: number;
};

export default function Home({ programsData }: PropsType) {
  const [tags, setTags] = React.useState<tagType[]>([]);

  // pagination
  const [maxCount] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const indexOfLast = page * maxCount;
  const indexOfFirst = indexOfLast - maxCount;
  const programs = programsData.slice(indexOfFirst, indexOfLast);
  const counter = Math.ceil(programsData.length / maxCount);
  const handlePaginationChange = (event: any, value: number) => {
    setPage(value);

    window &&
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  };

  const countTags = () => {
    const tagList: tagType[] = [];

    programsData.forEach((programData: programType) => {
      programData.tags.forEach((tag: string) => {
        const index = tagList.findIndex((tagListData) => {
          return tagListData.name === tag;
        });

        if (index === -1) {
          tagList.push({
            name: tag,
            count: 1,
          });
        } else {
          tagList[index].count += 1;
        }
      });
    });

    setTags(tagList);
  };

  React.useEffect(() => {
    countTags();

    return () => countTags();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} component="main">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {programs.map((programData: programType, index: number) => (
              <Link href={`/${programData.slug}`} key={index}>
                <ProgramCard programData={programData} />
              </Link>
            ))}
            <Box sx={{ my: 4 }}>
              <Pagination
                count={counter}
                page={page}
                onChange={handlePaginationChange}
                style={{ justifyContent: "center", display: "flex" }}
                // color="success"
                variant="outlined"
              />
            </Box>
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
                <b>Programming Language</b>
              </Typography>
              <Divider sx={{ mb: 3 }} />
              {tags.map((tag: tagType, index: number) => (
                <Chip
                  key={index}
                  label={`${tag.name} ( ${tag.count} )`}
                  variant="outlined"
                  color="success"
                  size="medium"
                  style={{ margin: "5px" }}
                />
              ))}
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

export async function getStaticProps() {
  const programsData: programType[] = await fetch(
    `https://api.program.codinasion.org`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res: any) => res.json());

  return {
    props: {
      programsData,
    },
    revalidate: 60,
  };
}
