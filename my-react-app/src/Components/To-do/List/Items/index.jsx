import React from "react";
import './TodoItems.css'
function TodoItems(props){
    return(
        <li>
            <span><i className={`fa-solid fa-check ${props.completed && 'fa-check-double'}`} onClick={props.onComplete}></i></span>
            <span> <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text} </p></span>
            <span><i className="fa-solid fa-trash-can" onClick={props.onDelete}></i></span>
        </li>
    ); 
}

export { TodoItems };