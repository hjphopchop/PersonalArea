// @ts-nocheck
import React, { FC, useEffect } from "react";
import cl from "./LoginForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { authApi } from "../../services/Auth";
import { useAppDispatch } from "../../hooks/store";
import { login } from "../../store/reducers/auth";
import { FiLoader } from "react-icons/fi";

type Inputs = {
  login: string;
  password: string;
};

const LoginForm: FC = () => {
  const [loginUser, { data }] = authApi.useLoginUserMutation();
  const dispatch = useAppDispatch();
  console.log(localStorage.getItem("login") || false);

  useEffect(() => {
    if (data && data.access_token) {
      dispatch(login());
    }
  }, [data, dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => await loginUser(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      
      <input
        className={cl.input}
        {...register("email", {
          required: true,
        })}
        
      />
     
      <input
        type="password"
        className={cl.input}
        {...register("password", { required: true })}
      />
      

      <button disabled={isSubmitting} type="submit" className={cl.submitBtn} >
       {isSubmitting ?<span>{<FiLoader/>}</span>
       :<span> Войти</span>} </button>
    </form>
  );
};

export default LoginForm;
