export type GithubProject = {
  Year: string;
  Name: string;
  MadeAt: string;
  Image: string;
  Description: { de: string; en: string };
  BuiltWith: string[];
  Link: string;
  frontPage: boolean;
};

export type Language = "de" | "en";

export type Job = {
  Company: string;
  Belonging: string;
  Description: { de: string; en: string };
  Stack: string[];
  EmployeeReferences?: string;
};
