import React from "react";
import './TodoCreateButton.css'

function CreateTodoButton(){
    const onClickButton = (msg) => {
        alert(msg);
      };

    return(
        <section className="bottoncenter">
            <button className="btn btn__prmary" onClick={() => onClickButton('Aquí se debería abrir el modal')}>ADD TO DO</button>
        </section>
   
    );
}

export { CreateTodoButton };