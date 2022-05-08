import React from "react";
import cl from "./LoginForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  login: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => alert("vhod");


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <input className={cl.input} {...register("login", { required: true })} />

      <input
        type="password"
        className={cl.input}
        {...register("password", { required: true })}
        
     />
{errors.password && <span >обязательное поле</span>}
   

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
