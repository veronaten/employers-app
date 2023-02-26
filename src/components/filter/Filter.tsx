import "./Filter.css";

interface FilterPropsType {
  filter: string;
  onFilterClick: (filter: string) => void;
}

const Filter = ({ filter, onFilterClick }: FilterPropsType) => {
  const buttonsArray = [
    {
      name: "all",
      label: "All employees",
    },
    {
      name: "rise",
      label: "For promotion",
    },
    {
      name: "salary",
      label: "Salary over 1000$",
    },
  ];

  const buttons = buttonsArray.map((item) => {
    const active = filter === item.name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        key={item.name}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => onFilterClick(item.name)}
      >
        {item.label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default Filter;
