import React from "react";
import styles from "./Card.module.css";
import CardImage from "../../assets/CardImage.png";

const QtifyCard = () => {
  return (
    <div className={styles.qtifycard}>
      <div className={styles.upperTile}>
        <img src={CardImage} alt="cardImage" />
        <div className={styles.cardBullet}>
          <p>100M follows</p>
        </div>
      </div>
      <div className={styles.lowerTile}>
        <p className={styles.cardtitle}>New Bollywood</p>
      </div>
    </div>
  );
};

export default QtifyCard;
