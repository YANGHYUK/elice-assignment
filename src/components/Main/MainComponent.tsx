import React from "react";
import "./MainComponent.scss";
import SearchBarContainer from "@containers/Main/SearchBar";
import ListBoxContainer from "@containers/Main/ListBox";
const MainComponent = () => {
  return (
    <div className="main-style">
      <div className="main-style__searchBox">
        <SearchBarContainer />
      </div>
      <div className="main-style__listBox">
        <ListBoxContainer />
      </div>
    </div>
  );
};

export default MainComponent;
