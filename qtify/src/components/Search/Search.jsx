import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import styles from "./Search.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Search = ({ data }) => {
  const [val, setVal] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
    // const res = data.filter((item) => {
    //   item.title.Includes(e.target.value);
    // });
  };
  const clickHandler = () => {};
  return (
    <div className={styles.wrapper}>
      <Autocomplete
        freeSolo
        id="free-solo-2"
        disableClearable
        options={data.map((options) => options.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search a album of your choice"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onChange={changeHandler}
            sx={{
              width: "502px",
              background: "white",
              height: "100%",
            }}
          />
        )}
      />
      <button
        className={styles.searchButton}
        type="submit"
        onClick={clickHandler}
      >
        <SearchIcon />
      </button>
      {val ? <></> : null}
    </div>
  );
};

export default Search;
