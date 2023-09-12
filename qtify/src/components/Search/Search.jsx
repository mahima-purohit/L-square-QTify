import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div>
      <form className={styles.wrapper}>
        <input className={styles.search} />
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
