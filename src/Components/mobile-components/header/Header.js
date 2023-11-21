import React from "react";

import styles from "../../../styles/app-mobile-styles/header.module.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-menu_block"]}>
        <ul>
          <NavLink>
            <li>Услуги</li>
          </NavLink>
          <NavLink>
            {" "}
            <li>Виджеты</li>
          </NavLink>
          <NavLink>
            <li>Интеграции</li>
          </NavLink>
          <NavLink>
            <li>Кейсы</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
