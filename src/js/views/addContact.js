import React, { useState} from "react";
import { useParams } from "react-router-dom";


 /** Formulario con todos los campos que se requieren pada insetar un nuevo contacto
 * 
 * El formulario acordaos que todos los campos deben ser controlador por React. Aseguraos de enlazar bien
 * el atributo value y el evento onChange
 */

export function AddContact() {
    const { idContact } = useParams();

    // Opcion 1: Una variable de estado para cada campo
    const [name, setName] = useState(''); 

    // Variable de estado para saber si estamos en modo edición o en modo añadir contacto
    const [isEditing, setIsEditing] = useState(false);

    // Vamos usar un useEffect para detectar si estamos editando un contacto. Si es así, tenemos que 
    // rellenar todos los campos del formulario con la información del contacto
    useEffect(() => {
        if (idContact) {
          fetch(`https://assets.breatheco.de/apis/fake/contact/${idContact}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error al obtener contacto");
              }
              return response.json();
            })
            .then((data) => {
            // Establezco el estado del campo Name del formulario. ESto teneis que hacerlo para los 3 campos del formulario
              setName(data.full_name);
              setIsEditing(true);
            })
            .catch((error) => console.error(error));
        }
      }, [idContact]);

    // Opción 2: Un objeto, que tiene todos los valores de cada campo del formulario (más complejo y más adecuado para formularios con muchos campos)
    // const [contact, setContact] = useState({
    //     full_name: "",
    //     email: "",
    //     phone: "",
    //     address: "",
    //   });

    const handleSubmit = (e) => {

        // tenemos que consultar la variable de estado isEditing para determinar si hacemos un POST o un PUT
        e.preventDefault();
        const method = isEditing ? "PUT" : "POST";
        const url = isEditing
          ? `https://assets.breatheco.de/apis/fake/contact/${idContact}`
          : "https://assets.breatheco.de/apis/fake/contact/";
    

   // SIN useEffect ni nada parecido!
       // Tiene que hacer un POST o un PUT  al endpoint adecuado con el 'body' bien formado (un objeto de la misma estructura )

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

    return <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Mad Max" value={name}></input>
              <button type="submit" className="btn btn-primary" value={isEditing?"Editar Contacto": "Añadir Contacto"}>
                </button>
           </form>
}

