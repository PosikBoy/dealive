"use client";
import { CgProfile } from "react-icons/cg";

import "./header.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "@/stores/root-store-context";
const Header = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { profileInfo } = useStores();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      profileInfo.setIsLoggedIn(true);
    } else {
      profileInfo.setIsLoggedIn(false);
    }
  }, []);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="header__logo">
            <Link
              href="/"
              className="header__link"
              onClick={() => {
                document.body.classList.remove("modal-open");
                setIsOpen(false);
              }}
            >
              DEALIVE
            </Link>
          </div>
          <div
            className={`header__burger ${isOpen ? "open" : "closed"}`}
            onClick={() => {
              document.body.classList.toggle("modal-open");
              toggleOpen();
            }}
          >
            <span></span>
          </div>
          <nav className="header__nav">
            <Link href="/order" className="header__link">
              Сделать заказ
            </Link>
            <Link href="/reviews" className="header__link">
              Отзывы
            </Link>
            <Link href="/about" className="header__link">
              О нас
            </Link>
            {profileInfo.isLoggedIn ? (
              <Link href="/profile" className="header__link">
                Профиль
              </Link>
            ) : (
              <Link href="/login" className="header__link">
                Вход
              </Link>
            )}
          </nav>
          <nav className={`header__mobile-nav ${isOpen ? "open" : "closed"}`}>
            <Link
              href="/order"
              className="header__link"
              onClick={() => {
                document.body.classList.toggle("modal-open");
                toggleOpen();
              }}
            >
              Сделать заказ
            </Link>
            <Link
              href="/reviews"
              className="header__link"
              onClick={() => {
                document.body.classList.toggle("modal-open");
                toggleOpen();
              }}
            >
              Отзывы
            </Link>
            <Link
              href="/about"
              className="header__link"
              onClick={() => {
                document.body.classList.toggle("modal-open");
                toggleOpen();
              }}
            >
              О нас
            </Link>
            {profileInfo.isLoggedIn ? (
              <Link
                href="/profile"
                className="header__link"
                onClick={() => {
                  document.body.classList.toggle("modal-open");
                  toggleOpen();
                }}
              >
                <CgProfile size={30} />
              </Link>
            ) : (
              <Link
                href="/login"
                className="header__link"
                onClick={() => {
                  document.body.classList.toggle("modal-open");
                  toggleOpen();
                }}
              >
                <CgProfile size={30} />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
});

export default Header;
