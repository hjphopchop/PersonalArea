import React, { FC, useState } from "react";
import { User } from "../../types/User";
import Modal from "../modal/Modal";
import UserForm from "../userForm/UserForm";
import cl from "./UserItem.module.css";

import { RiDeleteBin6Fill, RiEditFill } from "react-icons/ri";

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
      <div>Имя: {user.firstName}</div>
      <div>Фамилия: {user.lastName}</div>
      <div>e-mail: {user.email}</div>

      <div>
        <button onClick={handleChange} className={cl.changeBtn}>
          <RiEditFill />
        </button>
        <button onClick={handleRemove} className={cl.removeBtn}>
          <RiDeleteBin6Fill />
        </button>
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <UserForm user={user} variant={variant} />
      </Modal>
    </div>
  );
};

export default UserItem;
