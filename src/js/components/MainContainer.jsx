import React, { useState } from "react";
import Boton from "./Boton";
import ListaTareas from "./ListaTareas";

// create your first component
const MainContainer = ({}) => {
    const [inputValue,setInputValue] = useState(''); // almacena el valor del input
    const [tareas ,setTareas]= useState([]);

    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
       const nuevaTarea = {
      id: tareas.length ,
      texto: inputValue,
    };

      setTareas([...tareas,nuevaTarea]); 
      setInputValue('');
      console.log('Funciona')
       }
    }

    const eliminarTarea = (id) => {
      setTareas(tareas.filter(t => t.id !== id));
    };

    return (
        <div className="container shadow main-cont align-items-start p-0">
            <div className="search cont-head-foot ">
              <input type="text" className="search__input mx-3" placeholder="Escribe aquí" onKeyDown={handleKeyDown} 
              onChange={e => setInputValue(e.target.value)} value={inputValue}/>
            </div>
            <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
            <div className="cont-head-foot">
                <p className="text-center mb-0">Quedan {tareas.length} tareas pendientes</p>
            </div>
        </div>
    );
};



export default MainContainer;