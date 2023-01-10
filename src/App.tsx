import React from "react";
import "./App.css";
import EmployersForm from "./components/employersForm/EmployersForm";
import EmployersList from "./components/employersList/EmployersList";
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
      <EmployersList />
      <EmployersForm />
    </div>
  );
}

export default App;
