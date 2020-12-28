const listaUsuarios = document.getElementById('lista-usuarios');
const boton = document.getElementById('boton');

function reqListener () {
	const usuarios = JSON.parse(this.responseText);
	//console.log(usuarios);

	const usuariosRender = usuarios.map(usuario => `<li>${usuario.nombre}</li>`).join('');
	//console.log(usuariosRender);
	listaUsuarios.innerHTML = usuariosRender;
}



// creamos el obj xmlhttp
var peticion = new XMLHttpRequest();
peticion.addEventListener("load", reqListener);
peticion.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
peticion.send();


function enviarDatos(){
 peticion.open('POST',
	'https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios',
	 true);
 peticion.setRequestHeader('Content-type',
	 'application/x-www-form-urlencoded');
	// form urlencoded significa que se le envian todos los datos como si fueran de una url encodificada
 peticion.send('nombre=miercoles30');
 setTimeout(refrescar,3000);
}

function refrescar(){
 peticion.open('GET','https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios');
 peticion.send();
}

boton.onclick = enviarDatos;


