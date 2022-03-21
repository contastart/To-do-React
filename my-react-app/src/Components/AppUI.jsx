import React from "react";
import { TodoHeader } from './To-do/Header'
import { TodoCounter } from  './To-do/Couter'
import { TodoSearch } from './To-do/Search'
import { TodoList } from './To-do/List'
import { TodoItems } from './To-do/List/Items'
import { CreateTodoButton } from './To-do/List/Botons'

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
    return(
        <React.Fragment>
            <TodoHeader></TodoHeader>
            <section className="wrapper">
                <TodoCounter total={totalTodos} completed={completedTodos}></TodoCounter>
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}></TodoSearch>
                <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItems
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
                </TodoList>
            </section>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };