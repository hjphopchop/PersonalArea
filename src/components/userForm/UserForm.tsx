import React from 'react'
import { useForm } from 'react-hook-form';
import { userApi } from '../../services/UserService';
import { User } from '../../types/User';

const UserForm = ({user}:any) => {
  const [createUser, {}] = userApi.useCreateUserMutation();
    const { register, handleSubmit } = useForm({
    
        defaultValues: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }
      });
      const onSubmit = (data:any) => {
        createUser({...data} as User);
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="firstName">First Name</label>
    <input placeholder="bill" {...register("firstName")} />

    <label htmlFor="lastName">Last Name</label>
    <input placeholder="luo" {...register("lastName")} />

    <label htmlFor="email">Email</label>
    <input
      placeholder="bluebill1049@hotmail.com"
      type="email"
      {...register("email")}
    />
    <input type="submit" />
  </form>
);
}

export default UserForm