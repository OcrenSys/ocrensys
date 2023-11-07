export type TProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type TPropsForm = {
  state: TState;
  touched: TEmailSendTouched;
  setState: Function;
  setTouched: Function;
  handleChange: any;
  onBlur: any;
  onSubmit: Function;
  isInvalidEmail: boolean;
};

export type TInformation = {
  hi: string;
  roles: string;
  description: string;
  skills: string[];
  getInTouch: string;
  image: string;
  social: TSocialUrls;
};

export type TEmailSend = {
  name?: string;
  email: string;
  subject: string;
  message: string;
};

export type TEmailSendTouched = {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
};

export type TResendParameters = {
  API_KEY: string;
  EMAIL: string;
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

export type TState = {
  error: string;
  isLoading: boolean;
  values: TEmailSend;
};
