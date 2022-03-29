
const AppHeader = ({toDo, done}) => {
    return (
        <div className="flex justify-between my-5">
            <h1>Todo app</h1>
            <h2 className="self-end font-bold">{toDo} more to do, {done} done</h2>
        </div>
    );
  };

export default AppHeader;