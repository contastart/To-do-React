import React from "react";
import todologofrom from  './../../../asset/img/to-do-list.png'
import './TodoHeader.css'
function TodoHeader() {
    return(
        <header>
            <span>T</span>
            <small>o Do List</small>
            <img src={ todologofrom } alt="logo app" width="92" height="92" />
        </header>
    );
}

export { TodoHeader };