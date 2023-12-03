interface GoodFirstIssueType {
  id: string;
  title: string;
  repository_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  body: string;
  labels: {
    id: number;
    name: string;
  }[];
}

type GoodFirstIssueLabelDataType = {
  label: string;
  count: number;
};

export type { GoodFirstIssueType, GoodFirstIssueLabelDataType };
