import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

/**
 * Mostrar todos los contactos de mi agenda
 * 
 * 1. Tendriamos que hacer una llamada a la API mediante un GET, a nuestra URL /agenda/whereisandra-agenda. Recordad que esto hay que hacerlo dentro del Hook useEffect,
 * 2. Primero crar la estctura de una Card de forma estática
 * 3. Necesitamos una variable de estado, mediante el hook useState, que va a ser informada con el resultado del fetch a la API
 * 4. Esa variable de estado, la useremos para iterar por cada uno de los items, y mapear cada campo en nuestra card (verificad bien que estructura tiene la respuesta fetch, y que propiedades tiene cada objeto)
 * 
 */

const borrarContacto = (id) => {
		// 1. Tenemos que hacer un fetch a la URL correcta (ver documentación de la API)
		// 2. El método HTTP a utilizar es el método DELETE
		// 3a. Vuelvo a hacer un GET a la API y machaco la variable de estado donde tengo almacenados todos mis contactos (parecido a lo que hacíemdos en la TODO FETCH API). setContacts(res)
		// 3b. En el useEffect que usais para hacer el GET, poniendo como dependencia por ejemplo la variable que almacena todos los contactos. Necesitas también eliminar el contacto de la variable de estado.  
         
}

export const Home = () => (
	<div className="text-center mt-5">
		{/** Para cada contacto, tengo que usar su propiedad .id para identificarlo de forma única, y así saber que contacto hay que borrar de la API */}
         <div className="card" >
			<button onClick={()=> borrarContacto(contact.id)}>ICONO DE BORRAR</button>
			<Link to={"/edit/${contact.id}"}>
			<button>ICONO DE EDITAR</button>
			</Link>

		     CADA TARJETA DE CONTACTO
		  </div>
	</div>
);
