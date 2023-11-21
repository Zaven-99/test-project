import React from "react";

import styles from "../../../styles/app-desktop-styles/header.module.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  const phoneNumber = "+7 555 555-55-55";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-logo__block"]}>
        <div className={styles["header-logo__block-inner"]}>
          <div className={styles["header-logo"]}></div>
          <div className={styles["header-logo__name"]}></div>
        </div>
        <div className={styles["about-us__title"]}>
          крупный интегратор CRM в Росcии и ещё 8 странах
        </div>
      </div>
       
      <div className={styles["header-menu__block"]}>
        <ul>
          <NavLink>
            <li>Услуги</li>
          </NavLink>
          <NavLink>
            <li>Виджеты</li>
          </NavLink>
          <NavLink>
            <li>Интеграции</li>
          </NavLink>
          <NavLink>
            <li>Кейсы</li>
          </NavLink>
          <NavLink>
            <li>Сертификаты</li>
          </NavLink>
        </ul>
      </div>
      <div className={styles["contacts-block"]}>
        <NavLink
          to={`tel:${phoneNumber}`}
          onClick={handleCallClick}
          className={styles["phone-number"]}
        >
          {phoneNumber}
        </NavLink>
        <div className={styles.apps}>
          <NavLink
            to={`tel:${phoneNumber}`}
            className={styles.telegram}
          ></NavLink>
          <NavLink
            to={`tel:${phoneNumber}`}
            className={styles.whatsUp}
          ></NavLink>
          <NavLink to={`tel:${phoneNumber}`} className={styles.viber}></NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
