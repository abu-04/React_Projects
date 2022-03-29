import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({content, onDelete, onToggleImportant, onToggleDone})=> {
    // console.log(content);
    const datas = content.map((item) => {
        const {id, ...otherData} = item;
        return (
            <li key={id} className="border-b py-2 text-lg">
                <TodoListItem 
                {...otherData} 
                onToggleImportant={()=> {onToggleImportant(id)}}
                onToggleDone={()=> {onToggleDone(id)}}
                onDelete={ () => {onDelete(id)}}/>
            </li>
            
        )
    });
    return (
        <ul className="my-5 border border-gray-300 rounded-md">
          { datas }
        </ul>
    );
  };


  export default TodoList;