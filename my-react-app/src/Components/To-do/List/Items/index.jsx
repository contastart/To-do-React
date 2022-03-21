import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoItems.css'
function TodoItems(props){
    return(
        <li>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}  onClick={props.onComplete}>
                <i className={`fa-solid fa-check`}></i>
            </span>
            <span> <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text} </p></span>
            <span><i className="fa-solid fa-trash-can" onClick={props.onDelete}></i></span>
        </li>
    ); 
}

export { TodoItems };