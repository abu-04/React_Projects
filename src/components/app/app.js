
import { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItemForm from '../add-item-form/add-item-form';

export default class TodoApp extends Component {
  randonId = 0;
  state = {
    todoData: [
      this.TodoItems('Bizmich'),
      this.TodoItems('Khorog'),
      this.TodoItems('GBAO'),
    ],
    valueOf: '',
    term: '',
    filter: 'all'
  };
  TodoItems(content) {
    return { content: content, important: false, done: false, id: this.randonId++ }
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx), ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  };
  addItem = (text) => {
    this.setState(({ todoData }) => {
      console.log(todoData);
      const newArray = [...todoData, this.TodoItems(text)]
      return {
        todoData: newArray
      }
    })
  };
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      console.log(oldItem);
      const newItem = { ...oldItem, done: !oldItem.done }

      const newArray = [
        ...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      }
    })
  };
  getValueOf = (text) => {
    this.setState({
      valueOf: text
    })
  };
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important }

      const newArray = [
        ...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  };
  search = (todoData, term) => {
    if (term === 0) {
      return todoData
    }
    return todoData.filter((el) => {
      return el.content
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    })
  };
  onSearchChange = (value) => {
    this.setState({
      term: value
    })
  };
  filters = (todoData, filter) => {
    switch (filter) {
      case 'all':
        return todoData;
      case 'active':
        return todoData.filter((item) => !item.done);
      case 'done':
        return todoData.filter((item) => item.done);
    }
  };
  onFilterChange = (filter) => {
    this.setState({
      filter: filter
    })
  };

  /* Filter starts here */
  render() {
    const { todoData, term, filter } = this.state;
    const visibleData = this.filters(this.search(todoData, term), filter);

    const doneCount = todoData.filter((el) => el.done === true).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className='container xl:w-1/3 w-11/12 mx-auto py-10'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='xl:flex space-x-1'>
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter onFilterChange={this.onFilterChange} filter={filter} />
        </div>
        <TodoList content={visibleData}
          onDelete={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <AddItemForm addItem={this.addItem} />
      </div>
    );

  }
};