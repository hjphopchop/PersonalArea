import React, { FC } from 'react'
import cl from './UsersList.module.css'
import { userApi } from '../../services/UserService';
import UserItem from '../../components/userItem/UserItem';
import { User } from '../../types/User';


const UsersList: FC = () => {
  const {data:users} = userApi.useFetchAllUsersQuery('')
console.log(users);
  return (
    <div className={cl.list}>
     {users && users.map((user:User) => 
     <UserItem key={user.id} {...user} />)}
    </div>
  )
}

export default UsersList