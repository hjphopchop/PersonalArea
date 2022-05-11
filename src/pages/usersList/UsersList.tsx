import React, { FC } from 'react'
import cl from './UsersList.module.css'
import { userApi } from '../../services/UserService';
import UserItem from '../../components/userItem/UserItem';


const UsersList: FC = () => {
  const {data:users} = userApi.useFetchAllUsersQuery('')
console.log(users);
  return (
    <div className={cl.list}>
     {users && users.map((user:any) => 
     <UserItem key={user.id} user={user} />)}
    </div>
  )
}

export default UsersList