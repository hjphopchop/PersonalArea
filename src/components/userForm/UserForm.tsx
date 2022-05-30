import React from "react";
import { useForm } from "react-hook-form";
import { userApi } from "../../services/UserService";
import { User } from "../../types/User";
import cl from "./UserForm.module.css";

interface UserFormProps {
  user: User;
  variant: string;
  handleClose: () => void;
}
const UserForm = ({ user, variant, handleClose }: UserFormProps) => {
  const [createUser] = userApi.useCreateUserMutation();
  const [updateUser] = userApi.useUpdateUserMutation();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user.id,
    },
  });
  console.log(variant);
  console.log(user);
  const onSubmit = (data: User) => {
    variant === "createUser"
      ? createUser({ ...data } as User)
      : updateUser({ ...data } as User);
    handleClose();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.userForm}>
      <label htmlFor="firstName">Имя</label>
      <input
        placeholder="bill"
        {...register("firstName", { required: true })}
      />

      <label htmlFor="lastName">Фамилия</label>
      <input placeholder="luo" {...register("lastName", { required: true })} />

      <label htmlFor="email">E-mail</label>
      <input
        placeholder="bluebill1049@hotmail.com"
        type="email"
        {...register("email", { required: true })}
      />
      <input type="submit" />
    </form>
  );
};

export default UserForm;
