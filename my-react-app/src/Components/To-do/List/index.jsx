import React from "react";
import './TodoList.css'

function TodoList(props) {
    return(
        <article className="todoData">
            <ul className="todoData--item">
                {props.children}
            </ul>
        </article>
    );
}

export  { TodoList };