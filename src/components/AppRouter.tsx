import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter: FC = () => {
  const auth: boolean = false;
  return (
    <>
      
        {auth
          ? privateRoutes.map((route) => (
            <Routes>
              <Route
                path={route.path}
               
                element={<route.element/>}
                key={route.path}
              />
              <Route
        path="*"
        element={<Navigate to={route.path} replace />}
    />
              </Routes>
            ))
          : publicRoutes.map((route) => (
            <Routes>
              <Route
                path={route.path}
                
                element={<route.element/>}
                key={route.path}
              />
                <Route
        path="*"
        element={<Navigate to={route.path} replace />}
    />
              </Routes>
            ))
            
            }
        
      
    </>
  );
};

export default AppRouter;
