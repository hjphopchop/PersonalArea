import React, { FC } from 'react'
import { User } from '../../types/User'
import cl from './UserItem.module.css'

interface UserItemProps {
  user: User
  remove: (user: User) => void
}
const UserItem: FC<UserItemProps> = ({user,remove}) => {
  const handleRemove = (event: React.MouseEvent) => {
    
    event.stopPropagation();
    remove(user)
    
  }
  return (<div className={cl.wrap}>
  <div>{user.firstName}</div>
  <div>{user.lastName}</div>
  <div>{user.company}</div>
  <div>
  <button onClick={handleRemove} >Изменить</button>
    <button onClick={handleRemove} >Удалить</button>
  </div>
  </div>
    
  )
}

export default UserItem