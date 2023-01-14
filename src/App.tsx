import React from "react";
import "./App.css";
import EmployersForm from "./components/employersForm/EmployersForm";
import EmployersList from "./components/employersList/EmployersList";
import Filter from "./components/filter/Filter";
import Info from "./components/info/Info";
import SearchPanel from "./components/searchPanel/SearchPanel";

function App() {
  const data = [
    { id: "1", name: "John", salary: "1000", increase: false },
    { id: "2", name: "Veronika", salary: "7000", increase: true },
    { id: "3", name: "Denis", salary: "15000", increase: true },
    { id: "4", name: "Kirill", salary: "3000", increase: false },
  ];
  return (
    <div className="app">
      <Info />
      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
      <EmployersList data={data} />
      <EmployersForm />
    </div>
  );
}

export default App;
