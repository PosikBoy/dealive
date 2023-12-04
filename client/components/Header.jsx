"use client";
import "./header.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [state, setState] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="header__logo">
            <Link
              href="/"
              className="header__link logo"
              onClick={() => {
                if (state) {
                  setState(!state);
                }
              }}
            >
              DEALIVE
            </Link>
          </div>
          <div
            className={
              state ? "header__burger active" : "header__burger closed"
            }
            onClick={() => {
              setState(!state);
            }}
          >
            <span></span>
          </div>
          <nav
            className={state ? "header__menu active" : "header__menu closed"}
          >
            <ul className="nav__list">
              <li>
                <Link
                  href="/"
                  className="header__link "
                  onClick={() => {
                    setState(!state);
                  }}
                >
                  Сделать заказ
                </Link>
              </li>
              <li>
                <Link
                  href="/smth"
                  className="header__link"
                  onClick={() => {
                    setState(!state);
                  }}
                >
                  Мои заказы
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="header__link"
                  onClick={() => {
                    setState(!state);
                  }}
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="header__link"
                  onClick={() => {
                    setState(!state);
                  }}
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="header__link"
                  onClick={() => {
                    setState(!state);
                  }}
                >
                  Вход / Регистрация
                </Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
