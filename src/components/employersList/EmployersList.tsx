import EmployersListItem from "../employersListItem/EmployersListItem";
import "./EmployersList.css";

export interface EmployersListDataType {
  id?: string;
  name: string;
  salary: string;
  increase: boolean;
  like: boolean;
  onDelete?: () => void;
  onToggleIncrease?: () => void;
  onAddLike?: () => void;
}

const EmployersList = ({
  data,
  onDelete,
  onToggleIncrease,
  onAddLike,
}: any) => {
  const employes = data.map((item: EmployersListDataType) => {
    return (
      <EmployersListItem
        name={item.name}
        salary={item.salary}
        key={item.id}
        increase={item.increase}
        like={item.like}
        onDelete={() => onDelete(item.id)}
        onToggleIncrease={() => onToggleIncrease(item.id)}
        onAddLike={() => onAddLike(item.id)}
      />
    );
  });

  return <ul className="app-list list-group">{employes}</ul>;
};

export default EmployersList;
