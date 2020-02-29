import React from "react";
import "./SearchForm.css";

export default function SearchForm(props) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Enter movie name"
    ></input>
  );
}
