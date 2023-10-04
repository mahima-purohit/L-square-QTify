import React from "react";
import styles from "MenuItem.module.css";

const MenuItem = ({ data }) => {
  return (
    <div className={styles.menuItem}>
      <img></img>
      <div>
        <h4>Album Name</h4>
        <p>Artist Name with comma separated values</p>
      </div>
      <div>follows</div>
    </div>
  );
};

export default MenuItem;
