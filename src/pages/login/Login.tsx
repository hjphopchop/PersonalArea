import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import cl from "./Login.module.css";
const Login = () => {
  return (
    <div className={cl.loginPage}>
      <div className={cl.authData}>
        <h3>тестовые данные:</h3>
        <p>email: test@gmail.com</p>
        <p>password: 123456</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
