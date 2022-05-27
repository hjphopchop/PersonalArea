import React from "react";
import Header from "../../components/header/Header";
import UsersList from "../../components/usersList/UsersList";
import cl from "./Users.module.css";
const Users = () => {
  return (
    <div className={cl.usersPage}>
      <div className={cl.content}>
        <Header />
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
