import EmployersListItem from "../employersListItem/EmployersListItem";
import "./EmployersList.css";

export interface EmployersListDataType {
  id?: string;
  name: string;
  salary: string;
  increase: boolean;
  onDelete?: () => void;
}

const EmployersList = ({ data, onDelete }: any) => {
  const employes = data.map((item: EmployersListDataType) => {
    return (
      <EmployersListItem
        name={item.name}
        salary={item.salary}
        key={item.id}
        increase={item.increase}
        onDelete={() => onDelete(item.id)}
      />
    );
  });

  return <ul className="app-list list-group">{employes}</ul>;
};

export default EmployersList;
