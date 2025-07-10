import React, { useState } from "react";
import Tarea from "./Tarea";

// create your first component
const ListaTareas = ({tareas,eliminarTarea}) => {
    if (tareas.length === 0) {
        return <p className="p-2 mx-3">No hay tareas pendientes</p>;
    }

    return (    
        <>
            {tareas.map((tarea) => (
            <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} eliminarTarea={eliminarTarea}/>
      ))}
        </> 
    );
};

export default ListaTareas;
