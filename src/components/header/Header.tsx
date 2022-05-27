import React, { FC } from "react";
import { useDispatch } from "react-redux";
import cl from "./Header.module.css";
import { logout } from "../../store/reducers/auth";
const Header: FC = () => {
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logout());
  };
  return (
    <div className={cl.header}>
      <button onClick={exit} className={cl.exitButton}>
        Выйти
      </button>
    </div>
  );
};

export default Header;
