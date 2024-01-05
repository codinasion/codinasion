interface ProgramDataType {
  title: string;
  description: string;
  contributor: string;
  createdAt: string;
  createdIssueNumber: string;
  publishedAt: string;
  created: boolean;
}

interface LanguageDataType {
  name: string;
  fileExtension: string;
  namingConvension: string;
}

interface BasePropsType {
  GITHUB_USERNAME: string;
  GITHUB_REPONAME: string;
  GITHUB_TOKEN: string;
}

interface SubmitProgramPropsType extends BasePropsType {
  SUBMIT_PROGRAM_USERNAME: string;
  SUBMIT_PROGRAM_ISSUE_NUMBER: string;
  SUBMIT_PROGRAM_TITLE: string;
  SUBMIT_PROGRAM_BODY: string;
}

interface SubmitProgramCommentClosePropsType extends BasePropsType {
  SUBMIT_PROGRAM_ISSUE_NUMBER: string;
}

interface AutoTrackIssuePropsType extends BasePropsType {
  AUTO_TRACK_ISSUE_NUMBER: string;
  AUTO_TRACK_ISSUE_TITLE: string;
  AUTO_TRACK_ISSUE_BODY: string;
}

interface CreateIssueCommentPropsType extends BasePropsType {
  ISSUE_NUMBER: string;
  COMMENT_BODY: string;
}

interface CloseIssuePropsType extends BasePropsType {
  ISSUE_NUMBER: string;
  CLOSING_LABELS: string[];
}

interface UpdateIssuePropsType extends BasePropsType {
  ISSUE_NUMBER: string;
  UPDATE_ISSUE_BODY: string;
  UPDATE_ISSUE_LABELS: string[];
}

interface CreateIssuePropsType extends BasePropsType {
  ISSUE_TITLE: string;
  ISSUE_BODY: string;
  ISSUE_LABELS: string[];
}

export type {
  ProgramDataType,
  LanguageDataType,
  BasePropsType,
  SubmitProgramPropsType,
  SubmitProgramCommentClosePropsType,
  AutoTrackIssuePropsType,
  CreateIssueCommentPropsType,
  CloseIssuePropsType,
  CreateIssuePropsType,
  UpdateIssuePropsType,
};
