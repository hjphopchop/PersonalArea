import React from 'react'
import { User } from '../../types/User'
import cl from './UserItem.module.css'

const UserItem = ({id,name,website}:User) => {
  return (<div className={cl.wrap}>
  <div>{id}</div>
  <div>{name}</div>
  <div>{website}</div>
  </div>
    
  )
}

export default UserItem