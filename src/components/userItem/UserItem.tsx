import React from 'react'
import { User } from '../../types/User'
import cl from './UserItem.module.css'

const UserItem = ({id,firstName,lastName,company}:User) => {
  const deleteUser = () => {
    
  }
  return (<div className={cl.wrap}>
  <div>{firstName}</div>
  <div>{lastName}</div>
  <div>{company}</div>
  <div>
    <button >удалить</button>
  </div>
  </div>
    
  )
}

export default UserItem