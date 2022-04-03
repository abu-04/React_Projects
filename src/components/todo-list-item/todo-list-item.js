import { Component } from "react";

export default class TodoListItem extends Component {


    render() {
        const { content, onDelete, important, done, onToggleImportant, onToggleDone } = this.props;

        let mainClass = 'flex justify-between px-2';
        if (done) {
            mainClass = mainClass + ' line-through decoration-4'
        }
        if (important) {
            mainClass = mainClass + ' text-green-500 font-extrabold'
        }


        return (
            <span className={mainClass}>
                <span
                    className="cursor-pointer"
                    onClick={onToggleDone}>
                    {content}
                </span>
                <span className="flex space-x-2">
                    <button type="button" className="py-1 px-3 border border-red-500 rounded text-red-500 hover:bg-red-500 hover:text-white"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o" />
                    </button>
                    <button type="button"
                        className="py-1 px-3 border rounded border-green-500  text-green-500 hover:bg-green-500 hover:text-white"
                        onClick={onToggleImportant}>
                        <i className="fa fa-exclamation" />
                    </button>
                </span>
            </span>
        )
    }
};
