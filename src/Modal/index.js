import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
    return ReactDOM.createPortal (             //portal creado y sig linea es el contenido a teletransportar 
        <div className="Modal">               
            {children}                        
        </div>, 
        document.getElementById("Modal")       //Nodo al cual se enviará el modal
    )
}



export { Modal };
