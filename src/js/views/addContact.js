import React, { useState} from "react";

 /** Formulario con todos los campos que se requieren pada insetar un nuevo contacto
 * 
 * El formulario acordaos que todos los campos deben ser controlador por React. Aseguraos de enlazar bien
 * el atributo value y el evento onChange
 */

export function AddContact() {

    // Opcion 1: Una variable de estado para cada campo
    const [name, setName] = useState(''); 

    // Opción 2: Un objeto, que tiene todos los valores de cada campo del formulario (más complejo y más adecuado para formularios con muchos campos)
    // const [contact, setContact] = useState({
    //     full_name: "",
    //     email: "",
    //     phone: "",
    //     address: "",
    //   });

    const handleSubmit = () => {
   // SIN useEffect ni nada parecido!
       // Tiene que hacer un POST al endpoint adecuado con el 'body' bien formado (un objeto de la misma estructura )

       /**
        *     {
        "full_name": "Soy un intruso",
        "email": "dave222@gmail.com",
        "agenda_slug": "whereisandra-agenda",
        "address":"47568 NW 34ST, 33434 FL, USA",
        "phone":"7864445566"
    }
        */
    };

    return <form onSubmit={handleSubmit()}>
              <label>Full Name</label>
              <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Mad Max" value={name}></input>
              <button type="submit" className="btn btn-primary">
                </button>
           </form>
}

