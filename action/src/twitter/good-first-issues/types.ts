type GoodFirstIssueType = {
  id: string;
  title: string;
  repository_url: string;
  html_url: string;
  updated_at: string;
  body: string;
  labels: {
    id: number;
    name: string;
  }[];
};

export type { GoodFirstIssueType };
