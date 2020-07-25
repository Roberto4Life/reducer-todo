import React from "react";

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={e => {props.handleSubmit(e)}}>
                <input
                    type="text"
                    name="item"
                    value={props.item}
                    onChange={props.handleChanges}
                />
                <button>Add ToDo</button>
            </form>
        </div>
    )
}

export default TodoForm;