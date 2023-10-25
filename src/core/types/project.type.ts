export type TProject = {
  title?: string;
  qualities?: Quality;
  description?: string;
  projects: Project[];
};

export type Quality = {
  title: string;
  icon?: string;
};

export type Project = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
};
