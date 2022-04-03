import { Component } from "react";

export default class ItemStatusFilter extends Component {
  btns = [
    { name: 'all', content: 'Все' },
    { name: 'active', content: 'Активные' },
    { name: 'done', content: 'Сделанные' },
  ]
  render() {
    const { onFilterChange, filter } = this.props;
    const buttons = this.btns.map(({ name, content }) => {

      const isActive = filter === name
      const clazz = isActive ? 'bg-green-500 ' : '';
      return (
        <button type="button"
          className={`item-status-filter-btn ${clazz} `}
          onClick={() => onFilterChange(name)}
        >{content}</button>
      )
    })

    return (
      <div className="flex border  item-status-filter">
        {buttons}
      </div>
    );
  }
};