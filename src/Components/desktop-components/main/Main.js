import React from "react";

import styles from "../../../styles/app-desktop-styles/main.module.css";


const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles["main-inner"]}>
        <div>
          <div className={styles["about-us__block-title"]}>
            <p>
              Зарабатывайте
              <br />
              больше
            </p>
          </div>
          <div className={styles["about-us__block-logo"]}></div>
          <div className={styles["about-us__block-description"]}>
            <p>Развиваем и контролируем продажи за вас</p>
          </div>
        </div>
        <div>
          <div className={styles.consultation}>
            <div className={styles["consultation-title"]}>
              <p>
                Вместе с <span>бесплатной консультацией</span> мы дарим:
              </p>
            </div>
            <div className={styles["consultation-block"]}>
              <div>
                <p className={`${styles["widget-title"]} ${styles["title"]}`}>
                  Виджеты
                </p>
                <p
                  className={`{styles["widget-description"]} ${styles["description"]}`}
                >
                  30 готовых
                  <br /> решений
                </p>
              </div>
              <div>
                <p
                  className={`${styles["dashboard-title"]} ${styles["title"]}`}
                >
                  DASHBOARD
                </p>

                <p
                  className={`${styles["dashboard-description"]} ${styles["description"]}`}
                >
                  с показателями
                  <br />
                  вашего бизнеса
                </p>
              </div>
              <div>
                <p className={`${styles["skype-title"]} ${styles["title"]}`}>
                  Skype Аудит
                </p>

                <p
                  className={`${styles["skype-description"]} ${styles["description"]}`}
                >
                  отдела продаж
                  <br />
                  и CRM системы
                </p>
              </div>
              <div>
                <p className={`${styles["crm-title"]} ${styles["title"]}`}>
                  35 дней
                </p>

                <p
                  className={`${styles["crm-description"]} ${styles["description"]}`}
                >
                  использования
                  <br />
                  CRM
                </p>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <button>Получить консультацию</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
