import React from "react";
import UsersList from "../../components/usersList/UsersList";
import cl from "./Users.module.css"
const Users = () => {
  return (
    <div className={cl.usersPage}>
      <div className={cl.content}>
      <UsersList />
      </div>
       
    </div>
     
    
  );
};

export default Users;
