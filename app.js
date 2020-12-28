// Call Stack

function obtenerNombre(){
	return "Camilo";
}

function obtenerApellido(){
      return "Montoya";
}

function obtenerNombreCompleto(){
   const name = obtenerNombre();
   const lastname = obtenerApellido();
   return `${name} ${lastname}`; 
}

console.log(obtenerNombreCompleto());
