import { useRouter } from "next/router";

import fetch from "node-fetch";

import {
  Grid,
  Container,
  Typography,
  Chip,
  Divider,
  Button,
  Avatar,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import MdxComponent from "@/components/MdxComponent";

import Link from "@/components/Link";
import Breadcrump from "@/components/Breadcrump";
import Comment from "@/components/Comment";
import Seo from "@/components/Seo";
import AboutCard from "@/components/AboutCard";
import ProgramSkeleton from "@/components/ProgramSkeleton";

type programType = {
  slug: string;
  title: string;
  trackId: number;
  tags: string[];
  contributors: string[];
  contentHtml: string;
  markdown: string;
  latestUpdateDate: string;
};

type programsType = {
  slug: string;
  title: string;
  trackId: number;
  tags: string[];
  contributors: string[];
  latestUpdateDate: string;
};

type Props = {
  slug: string;
  programsData: programsType;
  programData: programType;
};

export default function Program({ programData }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <ProgramSkeleton />
      </>
    );
  }

  if (programData !== null) {
    return (
      <>
        <Seo title={programData.title} description={programData.markdown} />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} component="main">
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ mb: 1 }}>
                <b>{programData.title}</b>
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Breadcrump slug={programData.slug} />

              <ReactMarkdown
                components={MdxComponent}
                rehypePlugins={[rehypeRaw]}
              >
                {programData.markdown}
              </ReactMarkdown>
              <Divider sx={{ p: 1, mb: 5 }} />
              <Comment />
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
                {programData.tags.length > 0 ? (
                  programData.tags.map((tag: string, index: number) => (
                    <Chip
                      key={index}
                      label={`${tag}`}
                      variant="filled"
                      color="success"
                      size="medium"
                      style={{ margin: "5px" }}
                    />
                  ))
                ) : (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"center"}
                    sx={{ mb: 1 }}
                  >
                    <b className="footer-text">No Solution Available</b>
                  </Typography>
                )}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Link
                    href={`https://github.com/codinasion/program/issues/${programData.trackId}`}
                  >
                    <Button
                      variant="outlined"
                      color="success"
                      sx={{ mt: 2 }}
                      style={{ width: "100%" }}
                    >
                      <AddIcon sx={{ mr: 1 }} />
                      Add Solution
                    </Button>
                  </Link>
                </Grid>
              </Grid>
              {programData.contributors.length > 0 && (
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
                    {programData.contributors.map(
                      (contributor: string, index: number) => (
                        <Grid item xs={1} key={index}>
                          <Link href={`https://github.com/${contributor}`}>
                            <Tooltip title={contributor} placement="top">
                              <Avatar
                                alt={contributor}
                                src={`https://github.com/${contributor}.png?s=24`}
                                sx={{ width: 32, height: 32, mr: 1 }}
                              />
                            </Tooltip>
                          </Link>
                        </Grid>
                      )
                    )}
                  </Grid>
                </Grid>
              )}
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
}

export async function getStaticPaths() {
  const programData: programsType[] = await fetch(
    `https://api.program.codinasion.org/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res: any) => res.json());

  const paths =
    programData !== null
      ? programData.slice(0, 1).map((program) => ({
          params: {
            slug: program.slug,
          },
        }))
      : [];

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: Props }) {
  const { slug } = params;

  const programData: programType = await fetch(
    `https://api.program.codinasion.org/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res: any) => res.json());

  return {
    props: {
      programData,
    },
    revalidate: 60,
  };
}
