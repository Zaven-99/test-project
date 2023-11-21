import React from "react";

import styles from "../../../styles/app-mobile-styles/footer.module.css";
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
    <div className={styles.footer}>
      <div className={styles["about-company"]}>
        <p>О компании</p>
        <ul>
          <NavLink>
            <li>Партнёрская программа</li>
          </NavLink>
          <NavLink>
            <li>Вакансии</li>
          </NavLink>
        </ul>
      </div>
      <div className={styles["menu-wrapper"]}>
        <p>Меню</p>
        <div className={styles.menu}>
          <div className={styles["menu-item"]}>
            <ul>
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
          <div className={styles["menu-item"]}>
            <ul>
              <NavLink>
                <li>Благодарность клиентов</li>
              </NavLink>
              <NavLink>
                <li>Кейсы</li>
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
        </div>
      </div>
      <div className={styles.contacts}>
        <p>Контакты</p>
        <ul>
          <NavLink>
            <li onClick = {handleCallClick} className={styles['phone-number']}>{phoneNumber}</li>
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
    </div>
  );
};

export default Footer;
