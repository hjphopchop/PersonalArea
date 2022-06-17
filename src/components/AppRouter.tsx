import React, { FC } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useTypedSelector } from "../hooks/store";
import Login from "../pages/login/Login";
import Users from "../pages/users/Users";
import "../App.css";

const AppRouter: FC = () => {
  const isAuth: boolean = useTypedSelector((state) => state.auth.isAuth);
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={500} classNames="next">
        <Routes location={location}>
          {!isAuth && (
            <>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Navigate to={"/login"} replace />} />
            </>
          )}
          {isAuth && (
            <>
              <Route path="/" element={<Users />} />
              <Route path="*" element={<Navigate to={"/"} replace />} />
            </>
          )}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
