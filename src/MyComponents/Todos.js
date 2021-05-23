import React from 'react'
import {TodoItem} from "./TodoItem.js";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3>Todo List</h3>
            <TodoItem todo={props.todos[0]}/>
        </div>
    )
}
