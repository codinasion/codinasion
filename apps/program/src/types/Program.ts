type ProgramListType = {
  slug: string;
  title: string;
  languages: string[];
  contributors: string[];
  lastUpdated: string;
};

type ProgramDataType = ProgramListType & {
  trackId: number;
  description: string;
  c?: string;
  "c-sharp"?: string;
  "c-plus-plus"?: string;
  dart?: string;
  "f-sharp"?: string;
  go?: string;
  haskell?: string;
  java?: string;
  javascript?: string;
  julia?: string;
  kotlin?: string;
  perl?: string;
  php?: string;
  python?: string;
  r?: string;
  ruby?: string;
  rust?: string;
  scala?: string;
  swift?: string;
  typescript?: string;
};

export type { ProgramListType, ProgramDataType };
