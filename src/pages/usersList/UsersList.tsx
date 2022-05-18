import React, { FC } from 'react'
import cl from './UsersList.module.css'
import { userApi } from '../../services/UserService';
import UserItem from '../../components/userItem/UserItem';
import { User } from '../../types/User';
import { getAuth, signOut } from "firebase/auth";
import { RemoveUser } from '../../store/reducers/auth';
import { useAppDispatch } from '../../hooks/store';


const UsersList: FC = () => {
  const dispatch = useAppDispatch();
  const {data:users, error, isLoading, refetch} = userApi.useFetchAllUsersQuery('')
  const [deleteUser, {}] = userApi.useDeleteUserMutation()
console.log(users);
const resetLogin=() => {
  const auth = getAuth();
  signOut(auth).then (()=> {
    dispatch(RemoveUser())
  })
}
const handleRemove = (user:User) => {
  deleteUser(user);
}

  return (
    <div className={cl.list}>
      <button onClick={() => {resetLogin()}}>exit</button>
      {isLoading && <h1>Загрузка</h1>}
      {error && <h1>Ошибка</h1>}
     {users && users.map((user:User) => 
     <UserItem key={user.id} user={user} remove = {handleRemove} />)}
    </div>
  )
}

export default UsersList