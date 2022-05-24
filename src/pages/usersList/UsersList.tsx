import React, { FC, useState } from "react";
import cl from "./UsersList.module.css";
import { userApi } from "../../services/UserService";
import UserItem from "../../components/userItem/UserItem";
import { User } from "../../types/User";
import { useAppDispatch } from "../../hooks/store";
import { logout } from "../../store/reducers/auth";

const UsersList: FC = () => {
  const [query, setQuery] = useState("");
  const { data: users, error, isLoading } = userApi.useFetchAllUsersQuery("");
  const [deleteUser, {}] = userApi.useDeleteUserMutation();
  const [createUser, {}] = userApi.useCreateUserMutation();
  const dispatch = useAppDispatch();
  const handlecreate = async () => {
    const firstName = prompt();
    await createUser({ firstName, body: firstName } as User);
  };
  const exit = () => {
    dispatch(logout());
    
  };
  const handleRemove = (user: User) => {
    deleteUser(user);
  };

  return (
    <div className={cl.list}>
      <button onClick={exit}>exit</button>
      <button onClick={handlecreate}>add</button>
      <input  placeholder="search" 
      onChange={(e) => setQuery(e.target.value)}  />
      {isLoading && <h1>Загрузка</h1>}
      {error && <h1>Ошибка</h1>}
      {users &&
      users.filter((user:User):any => {
      if(query === "") {
        return user
      } 
      else if (user.firstName.toLowerCase().includes(query.toLowerCase()))
         return user
         
        
      }).map((user: User) => (
          <UserItem key={user.id} user={user} remove={handleRemove} />
        ))}
    </div>
  );
};

export default UsersList;
