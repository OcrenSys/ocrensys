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

export type THome = {
  hi: string;
  roles: string;
  description: string;
  skills: string[];
  getInTouch: string;
  imageLg: string;
  imageSm: string;
  social: TSocialUrls;
};

export type TAbout = {
  
}

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

export enum ANIMATE {
  LEFT_TO_RIGHT = 'left_to_right',
  RIGHT_TO_LEFT = 'right_to_left',
  UP_TO_DOWN = 'up_to_down',
  DOWN_TO_UP = 'down_to_up',
  IN = 'in',
  OUT = 'out',
}

export type TVariant = {
  initial?: object;
  animate?: object;
  transition?: object;
};
