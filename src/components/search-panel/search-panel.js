import { Component } from "react";

export default class SearchPanel extends Component {
  state = {
    term: ''
  };
  getValueOf = (e) => {
    const value = e.target.value;
    this.setState({
      term: value,
    });
    this.props.onSearchChange(value)
  }
  render() {
    return (
      <input
        className='w-full rounded border border-gray-300 outline-none p-2'
        type="text"
        placeholder='Поиск'
        value={this.state.term}
        onChange={this.getValueOf}
      />
    )
  }
}