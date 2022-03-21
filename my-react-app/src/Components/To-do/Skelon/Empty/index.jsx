import React from "react";

function TodoEmpty(){
    return(
        <React.Fragment>
            <p>We can't find to do's</p>
            <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" alt="Imagen de Vacío" width="256"/>
        </React.Fragment>
        
    );
}

export { TodoEmpty };