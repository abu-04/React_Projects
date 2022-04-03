
const AppHeader = ({ toDo, done }) => {
    return (
        <div className="xl:flex justify-between my-5">
            <h1>Заметки</h1>
            <h2 className="self-end font-bold">{toDo} Осталось, {done} Сделаны</h2>
        </div>
    );
};

export default AppHeader;