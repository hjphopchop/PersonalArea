
import React, { FC, useState } from "react";
import cl from "./UsersList.module.css";
import { userApi } from "../../services/UserService";
import UserItem from "../userItem/UserItem";
import { User } from "../../types/User";
import { useAppDispatch } from "../../hooks/store";
import { logout } from "../../store/reducers/auth";
import Modal from "../modal/Modal";

const UsersList: FC = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data: users, error, isLoading } = userApi.useFetchAllUsersQuery("");
  const [deleteUser, {}] = userApi.useDeleteUserMutation();
  const [createUser, {}] = userApi.useCreateUserMutation();
  const dispatch = useAppDispatch();
  const handlecreate = async () => {
    const firstName = prompt();
    await createUser({ firstName, body: firstName } as User);
  };
  const handlecr = () => {
    setIsOpen(true);
  }
  const exit = () => {
    dispatch(logout());
    
  };
  const handleRemove = (user: User) => {
    deleteUser(user);
  };

  return (
    <div className={cl.list}>
      <button onClick={exit} className={cl.exitButton}>exit</button>
      <div className={cl.userList__items}> 
      <input  placeholder="search" 
      onChange={(e) => setQuery(e.target.value)}  />
      <button onClick={handlecreate}>+++</button>
      <button onClick={()=>setIsOpen(true)}>+</button>
      </div>
      
      
      {isLoading && <h1>Загрузка</h1>}
      {error && <h1>Ошибка</h1>}
      {users &&
      users.filter((user:User):unknown => {
      if(query === "") {
        return user
      } 
      else if (user.firstName && user.firstName.toLowerCase().includes(query.toLowerCase()))
         return user
         
        
      }).map((user: User) => (
          <UserItem key={user.id} user={user} remove={handleRemove} />
        ))}
        <Modal handleClose={()=> setIsOpen(false)} isOpen={isOpen}>
    899
  </Modal>
    </div>
  );
};

export default UsersList;
