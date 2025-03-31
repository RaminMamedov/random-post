export type Route = {
  name: string;
  path: string;
  getLink: () => string;
  linkText: string;
};

export type NavigationLevel3 = Route;

export type NavigationLevel2 = {
  name: string;
  text: string;
  children: NavigationLevel3[];
};

export type NavigationLevel1 = {
  name: string;
  text: string;
  children: NavigationLevel2[];
};
