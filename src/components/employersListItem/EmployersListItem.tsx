import React from "react";
import "./EmployersListItem.css";

interface EmployersListItemProps {
  name: string;
  salary: string;
  increase: boolean;
  like: boolean;
  onDelete: () => void;
  onToggleIncrease?: () => void;
  onAddLike?: () => void;
}

const EmployersListItem = (props: EmployersListItemProps) => {
  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onAddLike,
    increase,
    like,
  } = props;

  let classNames = `list-group-item d-flex justify-content-between`;
  if (increase) {
    classNames += ` increase`;
  }

  if (like) {
    classNames += ` like`;
  }

  return (
    <li className={classNames}>
      <span
        className={
          like ? "list-group-item-label like" : "list-group-item-label"
        }
        onClick={onAddLike}
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`${salary}$`}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployersListItem;

// class EmployersListItem extends React.Component<
//   EmployersListItemProps,
//   EmployeesListItemState
// > {
//   constructor(
//     props: EmployersListItemProps | Readonly<EmployersListItemProps>
//   ) {
//     super(props);
//     this.state = {
//       increase: false,
//       like: false,
//     };
//   }

//   onIncrease = () => {
//     this.setState(({ increase }) => ({
//       increase: !increase,
//     }));
//   };

//   addLike = () => {
//     this.setState(({ like }) => ({
//       like: !like,
//     }));
//   };

//   render() {
//     const { name, salary, onDelete, onToggleEncrease, onAddLike } = this.props;
//     const { increase, like } = this.state;

//     let classNames = `list-group-item d-flex justify-content-between`;
//     if (increase) {
//       classNames += ` increase`;
//     }

//     if (like) {
//       classNames += ` like`;
//     }

//     return (
//       <li className={classNames}>
//         <span
//           className={
//             like ? "list-group-item-label like" : "list-group-item-label"
//           }
//           onClick={onAddLike}
//         >
//           {name}
//         </span>
//         <input
//           type="text"
//           className="list-group-item-input"
//           defaultValue={`${salary}$`}
//         />
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-cookie btn-sm "
//             onClick={onToggleEncrease}
//           >
//             <i className="fas fa-cookie"></i>
//           </button>

//           <button
//             type="button"
//             className="btn-trash btn-sm "
//             onClick={onDelete}
//           >
//             <i className="fas fa-trash"></i>
//           </button>
//           <i className="fas fa-star"></i>
//         </div>
//       </li>
//     );
//   }
// }

// export default EmployersListItem;
