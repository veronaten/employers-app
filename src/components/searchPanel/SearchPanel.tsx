import React from "react";
import "./SearchPanel.css";

interface SearchPanelPropsType {
  onUpdateSearch: (term: string) => void;
}

interface SearchPanelStateType {
  term: string;
}
class SearchPanel extends React.Component<
  SearchPanelPropsType,
  SearchPanelStateType
> {
  constructor(props: SearchPanelPropsType) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e: {
    preventDefault: () => void;
    target: { value: any };
  }) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };
  render() {
    const { term } = this.state;
    return (
      <input
        onChange={this.onUpdateSearch}
        value={term}
        type="text"
        className="form-control search-input"
        placeholder="Find an employee"
      />
    );
  }
}

export default SearchPanel;
