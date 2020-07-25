import React from "react";

const TodoList = props => {
    return (
        <div>
            {props.state.toDo.map(toDo => {
                console.log(toDo)
                return (
                    <>
                        <div
                            key={toDo.id}
                            onClick={() => {props.toggleCompleted(toDo.id)}}
                            className={`item ${toDo.completed ? "completed" : ""}`}
                        />
                        <p>{toDo.name}</p>
                        
                    </>
                )

            })}
        </div>
    )
};

export default TodoList;