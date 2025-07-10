import React, { useState } from "react";
import Boton from "./Boton";

// create your first component
const Tarea = ({id,texto,eliminarTarea}) => {
    return (
        <div className="p-2 mx-3 d-flex justify-content-between align-items-center hover-me" >
<input type="checkbox" id={`cbx-${id}`} className="cbx2" style={{ display: "none" }} />
<label htmlFor={`cbx-${id}`} className="check">

                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                        <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                        <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                    <span className="tachado" style={{ marginLeft: "8px" }}>{texto}</span>
                </label>
                <div className="justify-content end">
                <Boton onClick={() => eliminarTarea(id)}/>
                </div>
        </div>    
    );
};

export default Tarea;
