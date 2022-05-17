import React, { FC } from "react";
import cl from "./LoginForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChangeAuth } from "../../store/reducers/auth";
import { useAppDispatch } from "../../hooks/store";

import "firebase/firestore";
import "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type Inputs = {
  login: string;
  password: string;
};

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const handleLogin = (email: any, password: any): any => {
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => dispatch(ChangeAuth()))
      .catch(() => alert("неправильный логин или пароль"));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    handleLogin(data.login, data.password);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <input className={cl.input} {...register("login", { required: true })} />

      <input
        type="password"
        className={cl.input}
        {...register("password", { required: true })}
      />
      {errors.password && <span>обязательное поле</span>}

      <label>reer {process.env.REACT_APP_FIREBASE_API_KEY}</label>
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
