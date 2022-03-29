
import { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItemForm from '../add-item-form/add-item-form';

export default class TodoApp extends Component {
  itemId = 50;
  state = {
    todoData: [
      this.TodoItems('Bizmich'),
      this.TodoItems('Khoro g'),
      this.TodoItems('GBAO'),
    ],
    valueOf: ''
  };
  TodoItems (content) {
    return {content: content,  important: false, done: false,  id: 1}
  }
  deleteItem = (id)=> {
    this.setState(({todoData}) => {
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
    this.setState(({todoData}) => {
      console.log(todoData);
        const newArray = [...todoData, this.TodoItems(text)]
        return {
          todoData: newArray
        }
    })
  };
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      console.log(oldItem);
      const newItem = {...oldItem, done: !oldItem.done}

      const newArray = [
        ...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
          todoData: newArray
        }
    })
  };
  getValueOf = (text) => {
    this.setState( {
      valueOf: text
    })
  };  
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, important: !oldItem.important} 

      const newArray = [
        ...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)
      ]

      return {
          todoData: newArray
        }
    })
  };
  render() {

    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done === true).length;
    const todoCount = todoData.length - doneCount;
      return (
        <div className='container w-1/3 mx-auto pt-10'>
            <AppHeader toDo={todoCount} done={doneCount}/>
          <div className='flex space-x-1'>
              <SearchPanel />
              <ItemStatusFilter />
          </div>
            <TodoList content={this.state.todoData} 
                      onDelete={ this.deleteItem} 
                      onToggleDone={this.onToggleDone} 
                      onToggleImportant={this.onToggleImportant} />
            <AddItemForm addItem={this.addItem}/>
        </div>
    );
    
  }
};