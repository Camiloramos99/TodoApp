import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"
import { TodoContext } from '../TodoContext';


function Modal({ children }) {
    const { 
        setOpenModal,
      } = React.useContext(TodoContext);

    return ReactDOM.createPortal (             //portal creado y sig linea es el contenido a teletransportar 
        <div className="Modal modal-content">               
            {children}    

                <div className="modal-background"></div>
                  <p>Oops! Your task list is quite full. Consider completing some tasks to make room for new ones. Keep up the great effort! 😉</p>
                  <button className="Button" 
                    onClick={ () => {setOpenModal(false)}}
                  >OK</button>
        </div>, 
        document.getElementById("Modal")       //Nodo al cual se enviará el modal
    )
}



export { Modal };
