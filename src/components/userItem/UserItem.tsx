import React, { FC, useState } from "react";
import { User } from "../../types/User";
import Modal from "../modal/Modal";
import UserForm from "../userForm/UserForm";
import cl from "./UserItem.module.css";

interface UserItemProps {
  user: User;
  remove: (user: User) => void;
}
const UserItem: FC<UserItemProps> = ({ user, remove }) => {
  const [isOpen, setIsOpen] = useState(false);
  const variant = "UpdateUser";
  const handleChange = () => {
    setIsOpen(true);
  };
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(user);
  };
  return (
    <div className={cl.wrap}>
      <div>{user.firstName}</div>
      <div>{user.email}</div>
      <div>
        <button onClick={handleChange}>Изменить</button>
        <button onClick={handleRemove}>Удалить</button>
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <UserForm user={user} variant={variant} />
      </Modal>
    </div>
  );
};

export default UserItem;
