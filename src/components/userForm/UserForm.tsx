import React from "react";
import { useForm } from "react-hook-form";
import { userApi } from "../../services/UserService";
import { User } from "../../types/User";

const UserForm = ({ user, variant }: any) => {
  const [createUser, {}] = userApi.useCreateUserMutation();
  const [updateUser, {}] = userApi.useUpdateUserMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user.id,
    },
  });
  console.log(variant);
  const onSubmit = (data: any) => {
    variant === "createUser"
      ? createUser({ ...data } as User)
      : updateUser({ ...data } as User);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input
        placeholder="bill"
        {...register("firstName", { required: true })}
      />

      <label htmlFor="lastName">Last Name</label>
      <input placeholder="luo" {...register("lastName", { required: true })} />

      <label htmlFor="email">Email</label>
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
