import React, { FC } from "react";
import cl from "./UsersList.module.css";
import { userApi } from "../../services/UserService";
import UserItem from "../../components/userItem/UserItem";
import { User } from "../../types/User";
import { useAppDispatch } from "../../hooks/store";
import { ChangeAuth } from "../../store/reducers/auth";

const UsersList: FC = () => {
  const { data: users, error, isLoading } = userApi.useFetchAllUsersQuery("");
  const [deleteUser, {}] = userApi.useDeleteUserMutation();
  const [createUser, {}] = userApi.useCreateUserMutation();
  const dispatch = useAppDispatch();
  const handlecreate = async () => {
    const firstName = prompt();
    await createUser({ firstName, body: firstName } as User);
  };
  const exit = () => {
    dispatch(ChangeAuth());
  };
  const handleRemove = (user: User) => {
    deleteUser(user);
  };

  return (
    <div className={cl.list}>
      <button onClick={exit}>exit</button>
      <button onClick={handlecreate}>add</button>
      {isLoading && <h1>Загрузка</h1>}
      {error && <h1>Ошибка</h1>}
      {users &&
        users.map((user: User) => (
          <UserItem key={user.id} user={user} remove={handleRemove} />
        ))}
    </div>
  );
};

export default UsersList;
