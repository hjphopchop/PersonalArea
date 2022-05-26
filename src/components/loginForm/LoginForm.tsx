// @ts-nocheck
import React, { FC, useEffect } from "react";
import cl from "./LoginForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { authApi } from "../../services/Auth";
import { useAppDispatch } from "../../hooks/store";
import { login } from "../../store/reducers/auth";

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
      {errors.password && <span>обязательное поле</span>}

      <label>reer </label>
      <button disabled={isSubmitting} type="submit">
       {isSubmitting ?<span>Загрузка</span>
       :<span> Войти</span>} </button>
    </form>
  );
};

export default LoginForm;
