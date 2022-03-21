import React from "react";
import './TodoCounter.css'

function TodoCounter (props){

    return (
        <article className="textCounter">
            <p>Completed {props.completed} from {props.total}</p>
        </article>
    );

}

export { TodoCounter };