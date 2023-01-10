import React from "react";
import "./App.css";
import Filter from "./components/filter/Filter";
import Info from "./components/info/Info";
import SearchPanel from "./components/searchPanel/SearchPanel";

function App() {
  return (
    <div className="app">
      <Info />
      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
    </div>
  );
}

export default App;
