import React, { FC, useState } from "react";
import cl from "./UsersList.module.css";
import { userApi } from "../../services/UserService";
import UserItem from "../userItem/UserItem";
import { User } from "../../types/User";
import { useAppDispatch } from "../../hooks/store";
import { logout } from "../../store/reducers/auth";
import Modal from "../modal/Modal";
import UserForm from "../userForm/UserForm";

const UsersList: FC = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data: users, error, isLoading } = userApi.useFetchAllUsersQuery("");
  const [deleteUser, {}] = userApi.useDeleteUserMutation();
  const dispatch = useAppDispatch();
  const variant = "createUser";

  const defaultValue: User = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const exit = () => {
    dispatch(logout());
  };
  const handleRemove = (user: User) => {
    deleteUser(user);
  };

  return (
    <div className={cl.list}>
      <button onClick={exit} className={cl.exitButton}>
        Выйти
      </button>
      <div className={cl.userList__items}>
        <input
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => setIsOpen(true)}>+</button>
      </div>

      {isLoading && <h1>Загрузка</h1>}
      {error && <h1>Ошибка</h1>}
      {users &&
        users
          .filter((user: User): unknown => {
            if (query === "") {
              return user;
            } else if (
              user.firstName &&
              user.firstName.toLowerCase().includes(query.toLowerCase())
            )
              return user;
          })
          .map((user: User) => (
            <UserItem key={user.id} user={user} remove={handleRemove} />
          ))}
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <UserForm user={defaultValue} variant={variant} />
      </Modal>
    </div>
  );
};

export default UsersList;
