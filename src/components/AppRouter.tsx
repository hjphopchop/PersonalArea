import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter: FC = () => {
  const user = true
  return (
   
    <Routes>
      {user && (
         privateRoutes.map((route) => (
           <>
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
          <Route path="*" element={<Navigate to={route.path} replace />} />
          </>
      ))
      )
         }
      {!user && (
        publicRoutes.map((route) => (
          <>
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
          <Route path="*" element={<Navigate to={route.path} replace />} />
          </>
      ))
      )}

      </Routes>
        
          
        
  );
};

export default AppRouter;
