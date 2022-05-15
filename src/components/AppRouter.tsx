import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/store";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter: FC = () => {
  const isAuth: boolean = useTypedSelector((state) => state.auth.isAuth);
  return (
    <>
      {isAuth
        ? privateRoutes.map((route) => (
            <Routes>
              <Route
                path={route.path}
                element={<route.element />}
                key={route.path}
              />
              <Route path="*" element={<Navigate to={route.path} replace />} />
            </Routes>
          ))
        : publicRoutes.map((route) => (
            <Routes>
              <Route
                path={route.path}
                element={<route.element />}
                key={route.path}
              />
              <Route path="*" element={<Navigate to={route.path} replace />} />
            </Routes>
          ))}
    </>
  );
};

export default AppRouter;
