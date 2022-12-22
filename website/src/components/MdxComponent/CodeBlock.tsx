import React from "react";

import {
  Box,
  Chip,
  Grid,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EditIcon from "@mui/icons-material/Edit";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloseIcon from "@mui/icons-material/Close";

import Link from "@/components/Link";

import languages from "@/data/languages.json";
import fileNaming from "@/scripts/fileNaming";

type Props = {
  node: any;
  inline: boolean;
  className: string;
  children: any;
  slug: string;
  [key: string]: any;
};

export default function CodeBlock({
  children,
  className,
  slug,
  ...props
}: Props) {
  const [blocks, setBlocks] = React.useState<any>([]);
  const [tabs, setTabs] = React.useState<any>([]);
  const [filenames, setFilenames] = React.useState<any>([]);
  const [value, setValue] = React.useState(0);
  const [codeCopied, setCodeCopied] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(
      blocks[value].props.children[0].props.children[0]
    );
    setCodeCopied(true);
  };

  const codeCopySnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setCodeCopied(false);
  };

  const codeCopySnackbar = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={codeCopySnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const makeblock = () => {
    children.map(async (child: any) => {
      if (child.type === "pre") {
        let className = child.props.children[0].props.className;

        let language = className.split("-")[1];

        let tag = language;

        let languageData = languages.filter(
          (lang: any) => lang.fileExtension === language
        )[0];

        if (languageData) {
          tag = languageData.name;
        }

        let filename = slug.replaceAll("-", " ");
        let file = await fileNaming(filename, languageData);

        setBlocks((prevBlocks: []) => [...prevBlocks, child]);
        setTabs((prevTabs: []) => [...prevTabs, tag]);
        setFilenames((prevFilenames: []) => [...prevFilenames, file]);
      }
    });
  };

  React.useEffect(() => {
    makeblock();

    return () => makeblock();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Box sx={{ width: "100%", my: 3 }}>
        {tabs.map((tab: any, index: number) => {
          return (
            <Chip
              key={index}
              label={tab}
              variant={value === index ? "filled" : "outlined"}
              color="success"
              size="medium"
              sx={{ px: 2, m: 1 }}
              onClick={(e) => handleChange(e, index)}
            />
          );
        })}
      </Box>
      <Box
        sx={{ width: "100%", border: 1, borderColor: "primary.main", my: 5 }}
      >
        <Box sx={{ p: 1, borderBottom: 1, borderColor: "divider" }}>
          {blocks[value]}
        </Box>
        <Box sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Chip
                label={tabs[value]}
                variant="outlined"
                color="primary"
                size="small"
                sx={{
                  px: 2,
                  mx: 2,
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <Link
                href={`https://github.com/codinasion/program/blob/master/program/${slug}/${filenames[value]}`}
              >
                <Tooltip title="Edit Code">
                  <IconButton
                    aria-label="edit code"
                    size="small"
                    sx={{
                      float: "right",
                      color: "primary.main",
                      "&:hover": {
                        color: "primary.dark",
                      },
                      px: 2,
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </Link>
              <Link
                href={`https://github.com/codinasion/program/issues/new?assignees=harshraj8843&labels=bug&template=bug.yml&title=Issue%20in%20program/${slug}/${filenames[value]}&description=Found%20a%20bug%20in%20this%20code%20👉🏻%20https://github.com/codinasion/program/blob/master/program/${slug}/${filenames[value]}`}
              >
                <Tooltip title="Report Bug">
                  <IconButton
                    aria-label="report bug"
                    size="small"
                    sx={{
                      float: "right",
                      color: "error.main",
                      "&:hover": {
                        color: "error.dark",
                      },
                      px: 2,
                    }}
                  >
                    <BugReportIcon />
                  </IconButton>
                </Tooltip>
              </Link>
              <Tooltip title="Download Code">
                <Link
                  href={`https://raw.githubusercontent.com/codinasion/program/master/program/${slug}/${filenames[value]}`}
                >
                  <IconButton
                    aria-label="download code"
                    size="small"
                    sx={{
                      float: "right",
                      color: "secondary.main",
                      "&:hover": {
                        color: "secondary.dark",
                      },
                      px: 2,
                    }}
                  >
                    <FileCopyIcon />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Copy to clipboard">
                <IconButton
                  aria-label="copy to clipboard"
                  size="small"
                  color="secondary"
                  sx={{
                    float: "right",
                    "&:hover": {
                      color: "secondary.dark",
                    },
                    px: 2,
                  }}
                  onClick={copyCode}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
              <Snackbar
                open={codeCopied}
                autoHideDuration={2000}
                onClose={codeCopySnackbarClose}
                message="Code Copied !!!"
                action={codeCopySnackbar}
              >
                <Alert
                  onClose={codeCopySnackbarClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Code Copied to clipboard !!!
                </Alert>
              </Snackbar>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
