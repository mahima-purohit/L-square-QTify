import React from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";

const NavBar = ({ topAlbumsData, newAlbumsData, SongsData }) => {
  const mergedData = [...topAlbumsData, ...newAlbumsData];
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search data={mergedData} />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default NavBar;
