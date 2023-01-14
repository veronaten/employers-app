import EmployersListItem from "../employersListItem/EmployersListItem";
import "./EmployersList.css";

export interface EmployersListDataType {
  id?: string;
  name: string;
  salary: string;
  increase: boolean;
}

const EmployersList = ({ data }: any) => {
  const employes = data.map((item: any) => {
    return (
      <EmployersListItem
        name={item.name}
        salary={item.salary}
        key={item.id}
        increase
      />
    );
  });
  return <ul className="app-list list-group">{employes}</ul>;
};

export default EmployersList;
