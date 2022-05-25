import React from 'react'
import { useForm } from 'react-hook-form';

const UserForm = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
          firstName: "bill",
          lastName: "luo",
          email: "test@test.com",
          isDeveloper: true
        }
      });
      const onSubmit = (data:any) => {
        alert(JSON.stringify(data));
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

    <label>Is developer?</label>
    <input type="checkbox" {...register("isDeveloper")} />

    <input type="submit" />
  </form>
);
}

export default UserForm