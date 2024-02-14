import { useStores } from "@/stores/root-store-context";
import { observer } from "mobx-react-lite";
import "./SignInForm.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignInForm = observer(() => {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState("")
  const { profileInfo } = useStores();
  const handlerSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          login: login,
          password: password,
        }),
      });
      const data = await result.json();
      if (result.status == 200) {
        localStorage.setItem("token", data.token);
        profileInfo.setIsLoggedIn(true);
        router.push("/profile");
        setIsInvalid(false)
      }
      else {
        setIsInvalid(data.message)
      }
    } catch (error) {
      console.log(error);
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
    }
  };
  return (
    <form action="" className="sign-form">
      <h2>Авторизация</h2>
      {isInvalid ? <div className="sign-form__invalid-data">{isInvalid}</div>: ""}
      <input
        type="text"
        name="login"
        placeholder="Введите логин"
        className="sign-form__login field"
        value={login}
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
        <button className="sign-in__button" onClick={handlerSignIn}>
          Войти
        </button>
        <Link href="/registration">Нет аккаунта? Зарегистрируйтесь!</Link>
      </div>
    </form>
  );
});

export default SignInForm;
