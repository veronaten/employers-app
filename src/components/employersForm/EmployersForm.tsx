import React from "react";
import "./EmployersForm.css";

interface EmployersFormState {
  name: string;
  salary: string;
}
class EmployersForm extends React.Component<{}, EmployersFormState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  inputNameChangeHandler = (e: {
    preventDefault: () => void;
    target: { value: any };
  }) => {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  };

  inputSalaryChangeHandler = (e: {
    preventDefault: () => void;
    target: { value: any };
  }) => {
    e.preventDefault();
    this.setState({
      salary: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What is his name?"
            onChange={this.inputNameChangeHandler}
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            value={salary}
            onChange={this.inputSalaryChangeHandler}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersForm;
