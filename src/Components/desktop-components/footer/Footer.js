import React from "react";

import styles from "../../../styles/app-desktop-styles/footer.module.css";

import { NavLink } from "react-router-dom";

const Footer = () => {
  const phoneNumber = "+7 555 555-55-55";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleAddressClick = () => {
    window.open(
      "https://yandex.ru/maps/213/moscow/house/putevoy_proyezd_3s1/Z04YcwFpQUUHQFtvfXR2eXRrbQ==/?ll=37.569800%2C55.878890&z=16"
    );
  };
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles["about-company"]}>
          <p>О КОМПАНИИ</p>
          <NavLink>
            <li>Партнёрская программа</li>
          </NavLink>
          <NavLink>
            <li>Вакансии</li>
          </NavLink>
        </ul>
      </div>
      <div>
        <ul className={styles["menu"]}>
          <p>Меню</p>
          <NavLink>
            <li>Расчёт стоимости</li>
          </NavLink>
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
            <li>Наши клиенты</li>
          </NavLink>
        </ul>
      </div>
      <div>
        <ul className={styles["case"]}>
          <NavLink>
            <li>Кейсы</li>
          </NavLink>
          <NavLink>
            <li>Благодарственные письма</li>
          </NavLink>
          <NavLink>
            <li>Сертификаты</li>
          </NavLink>
          <NavLink>
            <li>Блог на Youtube</li>
          </NavLink>
          <NavLink>
            <li>Вопрос / Ответ</li>
          </NavLink>
        </ul>
      </div>
      <div className={styles.contacts}>
        <ul>
          <p>Контакты</p>
          <NavLink onClick={handleCallClick}>
            <li>{phoneNumber}</li>
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
            <NavLink
              to={`tel:${phoneNumber}`}
              className={styles.viber}
            ></NavLink>
          </div>
          <li
            onClick={handleAddressClick}
            style={{ cursor: "pointer" }}
            className={styles.address}
          >
            Москва, Путевой проезд 3с1, к 902
          </li>
          <li className={styles.rights}>
            ©WELBEX 2022. Все права защищены.
            <br /> <span>Политика конфиденциальности</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
