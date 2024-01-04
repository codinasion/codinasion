interface ProgramDataType {
  title: string;
  description: string;
  contributor: string;
  createdAt: string;
  createdIssueNumber: string;
  publishedAt: string;
  created: boolean;
}

interface SubmitProgramPropsType {
  GITHUB_USERNAME: string;
  GITHUB_REPONAME: string;
  GITHUB_TOKEN: string;
  SUBMIT_PROGRAM_USERNAME: string;
  SUBMIT_PROGRAM_ISSUE_NUMBER: string;
  SUBMIT_PROGRAM_TITLE: string;
  SUBMIT_PROGRAM_BODY: string;
}

interface SubmitProgramCommentClosePropsType {
  GITHUB_USERNAME: string;
  GITHUB_REPONAME: string;
  GITHUB_TOKEN: string;
  SUBMIT_PROGRAM_ISSUE_NUMBER: string;
}

interface CreateIssueCommentPropsType {
  GITHUB_USERNAME: string;
  GITHUB_REPONAME: string;
  GITHUB_TOKEN: string;
  ISSUE_NUMBER: string;
  COMMENT_BODY: string;
}

interface CloseIssuePropsType {
  GITHUB_USERNAME: string;
  GITHUB_REPONAME: string;
  GITHUB_TOKEN: string;
  ISSUE_NUMBER: string;
  CLOSING_LABELS: string[];
}

export type {
  ProgramDataType,
  SubmitProgramPropsType,
  SubmitProgramCommentClosePropsType,
  CreateIssueCommentPropsType,
  CloseIssuePropsType,
};
