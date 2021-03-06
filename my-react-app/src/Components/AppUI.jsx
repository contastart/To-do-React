import React from "react";
import { TodoContext } from './To-do/TodoContext'
import { TodoLoading } from "./To-do/Skelon/Loading";
import { TodoEmpty } from "./To-do/Skelon/Empty";
import { TodoError } from "./To-do/Skelon/Error";
import { TodoHeader } from './To-do/Header'
import { TodoCounter } from  './To-do/Couter'
import { TodoSearch } from './To-do/Search'
import { TodoList } from './To-do/List'
import { TodoItems } from './To-do/List/Items'
import { CreateTodoButton } from './To-do/List/Botons'
import { TodoForm } from "./To-do/Form";
import { Modal } from './To-do/List/Modal'

function AppUI(){
   
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoHeader></TodoHeader>
            <section className="wrapper">
                <TodoCounter/>
                <TodoSearch/>
                <TodoList>
                    {error && <TodoError error={error} />}
                    {loading && <TodoLoading/>}
                    {(!loading && !searchedTodos.length) && <TodoEmpty/>}

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

            {!!openModal && (
                <Modal>
                <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export { AppUI };