import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter (){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <article className="textCounter">
            <p>Completed {completedTodos} from {totalTodos}</p>
        </article>
    );

}

export { TodoCounter };