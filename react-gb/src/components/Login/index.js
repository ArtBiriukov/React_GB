import React, { useState } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { useInput } from "../../store/useInput";

export const Login = ({ isSignUp }) => {
  const [error, setError] = useState("");

  const {
    value: email,
    handleChange: handleChangeEmail,
    reset: resetEmail,
  } = useInput("");

  const {
    value: password,
    handleChange: handleChangePassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      if (isSignUp) {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } else {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      }
      resetEmail();
      resetPassword();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>

      <h2>{isSignUp ? "войти" : "Авторизуйся"}</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="электорнная почта" value={email} onChange={handleChangeEmail} />
        <input type="password" placeholder="пароль" value={password} onChange={handleChangePassword} />
        <input type="submit" />

        {error && <span>{error}</span>}
      </form>

      <Link to={`${isSignUp ? "/login" : "/signup"}`}>
        {!isSignUp ? "войти" : "Авторизируйся"}
      </Link>

    </>
  );
};
