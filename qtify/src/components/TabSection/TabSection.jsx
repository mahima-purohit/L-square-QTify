import React, { useEffect, useState } from "react";
import styles from "../Section/Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import QtifyTab from "../QtifyTab/QtifyTab";

const TabSection = ({ title, songsData }) => {
  const [filteredData, setFilteredData] = useState(songsData);
  const [tabValue, setTabValue] = useState("1");

  useEffect(() => {}, [filteredData]);

  const handleTabChange = async (event, newTabValue) => {
    setTabValue(newTabValue);
    const newData = await calculateFilteredData();
    console.log(newData, "newData");
    setFilteredData(newData);
  };

  const newData = (param) => {
    console.log("param", param);
    let data = songsData.filter((item) => {
      return item.genre.label === param;
    });
    return data;
  };

  const calculateFilteredData = async () => {
    let data = [];
    console.log("I am getting called");
    if (tabValue === "1") {
      data = { songsData };
    } else if (tabValue === "2") {
      data = newData("Rock");
    } else if (tabValue === "3") {
      data = newData("Pop");
    } else if (tabValue === "2") {
      data = newData("Jazz");
    } else if (tabValue === "2") {
      data = newData("Blues");
    }
    return data;
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      {!songsData.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          <QtifyTab handleTabChange={handleTabChange} tabValue={tabValue} />
          {tabValue === "1" ? (
            <Carousel
              data={songsData}
              componentRender={(ele) => <Card data={ele} type="songs" />}
            />
          ) : (
            <Carousel
              data={songsData}
              componentRender={(ele) => <Card data={ele} type="songs" />}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default TabSection;
