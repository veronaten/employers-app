import "./Info.css";

interface InfoPropsType {
  quantity: number;
  increaseEmployee: number;
}

const Info = ({ quantity, increaseEmployee }: InfoPropsType) => {
  return (
    <div className="app-info">
      <h1>Accounting for employees in the Diamond company</h1>
      <h2>Total number of employees: {quantity}</h2>
      <h2>The award will be received: {increaseEmployee}</h2>
    </div>
  );
};

export default Info;
