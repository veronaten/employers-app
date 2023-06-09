/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import EmployersForm from "./components/employersForm/EmployersForm";
import EmployersList from "./components/employersList/EmployersList";
import Filter from "./components/filter/Filter";
import Info from "./components/info/Info";
import SearchPanel from "./components/searchPanel/SearchPanel";

import "./App.css";

interface AppStateType {
  data: DataType[];
  term: string;
  filter: string;
}

interface DataType {
  id: string;
  name: string;
  salary: string;
  increase: boolean;
  like: boolean;
}
class App extends React.Component<{}, AppStateType> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      data: [
        { id: "1", name: "John", salary: "1000", increase: false, like: true },
        {
          id: "2",
          name: "Veronika",
          salary: "7000",
          increase: true,
          like: false,
        },
        {
          id: "3",
          name: "Denis",
          salary: "15000",
          increase: true,
          like: false,
        },
        {
          id: "4",
          name: "Kirill",
          salary: "3000",
          increase: false,
          like: false,
        },
      ],
      term: "",
      filter: "all",
    };
  }

  deleteEmployee = (id: string) => {
    this.setState({
      data: this.state.data.filter((item) => item.id !== id),
    });
  };

  addEmployee = (name: string, salary: string) => {
    const { v4: uuidv4 } = require("uuid");
    const randomId = uuidv4();

    const newData = [
      ...this.state.data,
      {
        id: randomId.toString(),
        name: name,
        salary: salary,
        increase: true,
        like: true,
      },
    ];
    console.log(newData);
    this.setState({ data: newData });
  };

  onToggleIncrease = (id: string) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onAddLike = (id: string) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        }
        return item;
      }),
    }));
  };

  filterEmployers = (items: DataType[], term: string) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term: string) => {
    this.setState({
      term,
    });
  };

  filterClick = (items: any, filter: string) => {
    switch (filter) {
      case "rise":
        return items.filter((item: any) => item.like);
      case "salary":
        return items.filter((item: any) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterClick = (filter: string) => {
    this.setState({ filter });
  };
  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterClick(
      this.filterEmployers(data, term),
      filter
    );
    const increaseEmployee = data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <Info quantity={data.length} increaseEmployee={increaseEmployee} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <Filter filter={filter} onFilterClick={this.onFilterClick} />
        </div>
        <EmployersList
          data={visibleData}
          onDelete={this.deleteEmployee}
          onToggleIncrease={this.onToggleIncrease}
          onAddLike={this.onAddLike}
        />
        <EmployersForm addNewEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
