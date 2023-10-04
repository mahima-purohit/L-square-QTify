import React, { useEffect, useState } from "react";
import styles from "../Section/Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import QtifyTab from "../QtifyTab/QtifyTab";

const TabSection = ({ title, songsData }) => {
  const [filteredData, setFilteredData] = useState(songsData);
  const [tabValue, setTabValue] = useState("1");

  useEffect(() => {
    setFilteredData(songsData);
  }, [songsData]);

  const handleTabChange = async (event, newTabValue) => {
    setTabValue(newTabValue);
    const newData = await calculateFilteredData(newTabValue);
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

  const calculateFilteredData = async (newTabValue) => {
    let data = [];
    console.log("I am getting called");
    if (newTabValue === "1") {
      data = songsData;
    } else if (newTabValue === "2") {
      data = newData("Rock");
    } else if (newTabValue === "3") {
      data = newData("Pop");
    } else if (newTabValue === "4") {
      data = newData("Jazz");
    } else if (newTabValue === "5") {
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
          <Carousel
            data={filteredData}
            componentRender={(ele) => <Card data={ele} type="songs" />}
          />
        </div>
      )}
    </div>
  );
};
export default TabSection;
