import React from "react";
import Login from "../pages/login/Login";
import Users from "../pages/users/Users";

export interface Route {
  path: string;
  element: React.FC;
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
