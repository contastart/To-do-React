import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
      };

    return(
        <article className="searchTodo">
            <input className="SearchInput" placeholder="Search todo" value={searchValue} onChange={onSearchValueChange} />
        </article>
    );
}

export { TodoSearch };