import React from "react";
import './TodoCreateButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
      };
      

    return(
        <section className="bottoncenter">
            <button className="CreateTodoButton" onClick={onClickButton}>+</button>
        </section>
   
    );
}

export { CreateTodoButton };