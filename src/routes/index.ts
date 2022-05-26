import Login from "../pages/login/Login";
import Users from "../pages/users/Users";

export interface Route {
  path: string;
  element: any;
}
export enum RouteNames {
  LOGINFORM = "/login",
  USERS = "/",
}

export const publicRoutes: Route[] = [
  { path: RouteNames.LOGINFORM, element: Login },
];

export const privateRoutes: Route[] = [
  { path: RouteNames.USERS, element: Users },
];
