import React from "react";

import styles from "../../../styles/app-mobile-styles/main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles["about-us__block-title"]}>
        <p>Зарабатывайте больше</p>
      </div>
      <div className={styles["about-us__block-logo"]}></div>
      <div className={styles["about-us__block-description"]}>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.consultation}>
        <div className={styles["consultation-title"]}>
          <p>
            Вместе с <span>бесплатной консультацией</span> мы дарим:
          </p>
        </div>
        <div className={styles["consultation-block"]}>
            <div className={styles['consultation-item']}>Skype аудит</div>
            <div className={styles['consultation-item']}>30 виджетов</div>
            <div className={styles['consultation-item']}>DASHBOARD</div>
            <div className={styles['consultation-item']}>Месяц аmoCRM</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
