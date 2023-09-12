import React from "react";
import styles from "./Hero.module.css";
import HeroText from "../../assets/HeroText.png";
import HeroIcon from "../../assets/HeroIcon.png";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <img src={HeroText} className={styles.HeroText} />
      <img src={HeroIcon} className={styles.HeroIcon} />
    </div>
  );
};

export default Hero;
