import React from "react";
import "./Header.css";
import SearchForm from "./SearchForm"

export default function Header(props) {
  return (
    <div className="header-wrapper">
      
      <h1 className="header-title">Movies App</h1>
      <SearchForm/>
    </div>
  );
}
