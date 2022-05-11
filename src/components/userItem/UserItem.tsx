import React from 'react'
import { User } from '../../types/User'
import cl from './UserItem.module.css'

const UserItem = ({user}:User) => {
  return (<div className={cl.wrap}>
  <div>{user.id}</div>
  <div>{user.name}</div>
  <div>{user.website}</div>
  </div>
    
  )
}

export default UserItem