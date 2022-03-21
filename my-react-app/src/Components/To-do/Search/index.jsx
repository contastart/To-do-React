import React from "react";
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }){

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