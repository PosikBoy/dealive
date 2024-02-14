"use client";
import "./profileInfo.css";
import { useState, useEffect } from "react";
import InputPhone from "@/components/InputPhone/InputPhone";
import ModalWindow from "@/components/ModalWindow/ModalWindow";
import { useStores } from "@/stores/root-store-context";
import { useRouter } from "next/navigation";

const ProfileInfo = () => {
  const router = useRouter();
  const { profileInfo } = useStores();
  //Состояния всех полей
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+7");
  //Состояние модального окна
  const [modalMenuSuccess, setModalMenuSuccess] = useState("");
  const [modalMenuError, setModalMenuError] = useState("");
  const logOut = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    profileInfo.setIsLoggedIn(false);
    router.push("/");
  };
  const getProfileInfo = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/profileinfo", {
        headers: {
          Authorization: `Bearer ${token}`, // Передача JWT токена в заголовке запроса
        },
      });
      if (response.status == 200) {
        const jsonData = await response.json();
        setName(jsonData.profile[0].name);
        setSurname(jsonData.profile[0].surname);
        setEmail(jsonData.profile[0].email);
        setPhone(jsonData.profile[0].phone_number);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const updateDataHandler = async (e) => {
    e.preventDefault();

    if (phone && !(phone.replaceAll(/\D/g, "").length == 11)) {
      setModalMenuError(true);
      return;
    }
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:5000/profileinfoupdate`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          phone_number: phone,
        }),
      });

      if (response.ok) {
        setModalMenuSuccess(true);
        document.body.classList.add("modal-open");
      } else {
        console.error("Failed to update data");
      }
    } catch (error) {
      console.error("Error occurred while updating data", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "email":
        setEmail(value);
        break;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) getProfileInfo(token);
    else {
      router.push("/login");
    }
  }, []);
  return (
    <div className="profile_info">
      <div className="container">
        <div className="profile-info__body">
          <h2 className="profile-info__title">Ваш профиль</h2>
          <form action="" className="profile-info__info">
            <div className="profile-info__name">
              <p className="profile-info__name-title">Имя</p>
              <input
                type="text"
                value={name || ""}
                placeholder="Введите свое имя"
                name="name"
                onChange={handleInputChange}
                className="profile-field"
              />
            </div>
            <div className="profile-info__surname">
              <p className="profile-info__surname-title">Фамилия</p>
              <input
                type="text"
                value={surname || ""}
                placeholder="Введите свою фамилию"
                name="surname"
                onChange={handleInputChange}
                className="profile-field"
              />
            </div>
            <div className="profile-info__email">
              <p className="profile-info__email-title">Электронная почта</p>
              <input
                type="email"
                value={email || ""}
                name="email"
                onChange={handleInputChange}
                className="profile-field"
                placeholder="Введите свою электронную почту"
              />
            </div>

            <div className="profile-info__phone">
              <p className="profile-info__phone-title">Номер телефона</p>
              <InputPhone
                className="profile-field"
                value={phone ? phone : ""}
                setPhone={setPhone}
              />
            </div>
            <div className="profile-info__buttons">
              <button
                className="profile-info__update-button"
                onClick={updateDataHandler}
              >
                Обновить данные
              </button>
              <button className="profile-info__logout-button" onClick={logOut}>
                Выйти
              </button>
            </div>
          </form>
        </div>
      </div>
      {modalMenuSuccess && (
        <ModalWindow
          message="Информация о пользователе успешно обновлена"
          textButton="Закрыть окно"
          onClick={() => {
            setModalMenuSuccess(false);
          }}
        />
      )}
      {modalMenuError && (
        <ModalWindow
          message="Заполните поля правильно"
          textButton="Закрыть окно"
          onClick={() => {
            setModalMenuError(false);
          }}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
