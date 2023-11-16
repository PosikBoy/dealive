"use client"
import "./header.css"
import Link from "next/link";
import {useEffect, useState } from "react";

const Header = () => {
  const [state, setState] = useState(false);
  useEffect(()=>{
    
  }, [state])
    return (
      <header className="header">
        <div className="container">
          <div className="header__body">
            <div className="header__logo">DEALIVE</div>
            <div className={state ? "header__burger active" : "header__burger closed"} onClick={() => {
                setState(!state)
              }}>
               <span></span>
            </div>
            <nav className={state ? "header__menu active" : "header__menu closed"}>
              <ul className="nav__list">
                <li><Link href="/" className="header__link">Сделать заказ</Link></li>
                <li><Link href="/smth" className="header__link">Мои заказы</Link></li>
                <li><Link href="/reviews" className="header__link">Отзывы</Link></li>
                <li><Link href="/about" className="header__link">О нас</Link></li>
                <li><Link href="/login" className="header__link">Вход / Регистрация</Link> </li>
              </ul>
            </nav>
            </div>
          </div>
      </header>
    );
}

export default Header