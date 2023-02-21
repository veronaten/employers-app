import React from "react";
import EmployersForm from "./components/employersForm/EmployersForm";
import EmployersList from "./components/employersList/EmployersList";
import Filter from "./components/filter/Filter";
import Info from "./components/info/Info";
import SearchPanel from "./components/searchPanel/SearchPanel";

import "./App.css";

interface AppStateType {
  data: DataType[];
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

  render() {
    const data = this.state.data;
    const increaseEmployee = data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <Info quantity={data.length} increaseEmployee={increaseEmployee} />
        <div className="search-panel">
          <SearchPanel />
          <Filter />
        </div>
        <EmployersList
          data={data}
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

// function App() {
//   const data = [
//     { id: "1", name: "John", salary: "1000", increase: false },
//     { id: "2", name: "Veronika", salary: "7000", increase: true },
//     { id: "3", name: "Denis", salary: "15000", increase: true },
//     { id: "4", name: "Kirill", salary: "3000", increase: false },
//   ];

//   const addNewEmployee = (obj: any) => {
//     const employee = {
//       id: "5",
//       name: obj.name,
//       salary: obj.salary,
//       increase: false,
//     };
//   };
//   return (
//     <div className="app">
//       <Info />
//       <div className="search-panel">
//         <SearchPanel />
//         <Filter />
//       </div>
//       <EmployersList data={data} onDelete={(id: string) => console.log(id)} />
//       <EmployersForm addNewEmployee={() => addNewEmployee({})} />
//     </div>
//   );
// }

// export default App;
