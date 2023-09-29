import React, { useEffect, useState } from "react";
// import Swiper from "swiper";
import styles from "./Carousel.module.css";
import { Swiper, useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
