import React, { FC, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/store";
import { privateRoutes, publicRoutes } from "../routes";
import { SetAuth } from "../store/reducers/auth";

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
