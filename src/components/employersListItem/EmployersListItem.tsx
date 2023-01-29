import React from "react";
import { EmployersListDataType } from "../employersList/EmployersList";
import "./EmployersListItem.css";

interface EmployersListItemProps {
  name: string;
  salary: string;
  increase: boolean;
}

interface EmployeesListItemState {
  increase: boolean;
}

class EmployersListItem extends React.Component<
  EmployersListItemProps,
  EmployeesListItemState
> {
  constructor(
    props: EmployersListItemProps | Readonly<EmployersListItemProps>
  ) {
    super(props);
    this.state = {
      increase: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase } = this.state;

    return (
      <li
        className={
          increase
            ? "list-group-item increase d-flex justify-content-between"
            : "list-group-item d-flex justify-content-between"
        }
      >
        <span className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={`${salary}$`}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployersListItem;

// const EmployersListItem = ({
//   name,
//   salary,
//   increase,
// }: EmployersListDataType) => {
//   return (
//     <li
//       className={
//         increase
//           ? "list-group-item increase d-flex justify-content-between"
//           : "list-group-item d-flex justify-content-between"
//       }
//     >
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="text"
//         className="list-group-item-input"
//         defaultValue={`${salary}$`}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm ">
//           <i className="fas fa-cookie"></i>
//         </button>

//         <button type="button" className="btn-trash btn-sm ">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };

// export default EmployersListItem;
