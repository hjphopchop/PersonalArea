import LoginForm from "../pages/loginForm/LoginForm";
import UsersList from "../pages/usersList/UsersList";

export interface Route {
  path: string;
  element: any;
}
export enum RouteNames {
    LOGINFORM = '/login',
    USERSLIST = '/'
}

export const publicRoutes: Route[] = [
{path: RouteNames.LOGINFORM, element: LoginForm}
];

export const privateRoutes: Route[] = [
    {path: RouteNames.USERSLIST, element: UsersList}
];