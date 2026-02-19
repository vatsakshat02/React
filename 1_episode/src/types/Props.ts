export type userProps = {
  name: string;
  location?: string;
  contact?: string;
};

export type userState = {
  userInfo: {
    name: string;
    location: string;
  };
};
