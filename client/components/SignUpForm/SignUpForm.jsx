"use client";
import { observer } from "mobx-react-lite";
import "./SignUpForm.css";
import Link from "next/link";
import { useState } from "react";
import { useStores } from "@/stores/root-store-context";
import { useRouter } from "next/navigation";

const SignUpForm = observer(() => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")  
  const { profileInfo } = useStores();
  const router = useRouter();
  const handlerRegister = async (e) => {
    e.preventDefault();
    const result = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        login: login,
        email: email,
        password: password,
      }),
    });

    const data = await result.json();
    localStorage.setItem("token", data.token);
    if (result.status == 201) {
      localStorage.setItem("token", data.token);
      profileInfo.setIsLoggedIn(true);
      router.push("/profile");
    } else {
      console.log(data.message)
      setError(data.message)
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "login":
        setLogin(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
    }
  };
  return (
    <form action="" className="sign-form">

      <h2>Регистрация</h2>
      <div className="sign-form__error"> {error}</div>
      <input
        type="text"
        name="login"
        placeholder="Введите логин"
        className="sign-form__login field"
        value={login}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Введите почту"
        className="sign-form__email field"
        value={email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Введите пароль"
        className="sign-form__password field"
        value={password}
        onChange={handleInputChange}
      />

      <div className="sign-form__row">
        <button className="sign-in__button" onClick={handlerRegister}>
          Зарегистрироваться
        </button>
        <Link href="/login">Есть аккаунт? Войдите</Link>
      </div>
    </form>
  );
});

export default SignUpForm;
