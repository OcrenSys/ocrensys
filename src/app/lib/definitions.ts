export type TInformation = {
  hi: string;
  roles: string;
  description: string;
  skills: string[];
  getInTouch: string;
  image: string;
  social: TSocialUrls;
};

export type TSocialUrls = {
  github: string;
  medium: string;
  likedIn: string;
};

export type TProject = {
  title?: string;
  qualities?: TProjectQuality[];
  description?: string;
  items: TProjectItem[];
};

export type TProjectQuality = {
  title: string;
  icon?: string;
};

export type TProjectItem = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
};
