const listaUsuarios = document.getElementById('body-usuarios');
const boton = document.getElementById('boton');
const limpiar = document.getElementById('limpiar');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const pais = document.getElementById('pais');
const indice = document.getElementById('indice');

let usuarios = [];
let botonesEliminar = null;
let botonesEditar = null;

function render () {
	const usuariosRender = usuarios.
		map((usuario,indice) => {

			
			let usuarioNombre = usuario.nombre ? usuario.nombre : 'vacio';
			let usuarioApellido = usuario.apellido ? usuario.apellido : 'vacio';
			let usuarioPais = usuario.pais ? usuario.pais : 'vacio';
/*
			if(usuario.nombre){
				console.log(`usuario ${usuario.nombre}`);
				usuarioNombre = usuario.nombre;
			}else{
				usuarioNombre = 'vacio';
			}

			if(usuario.apellido){
				usuarioApellido = usuario.apellido;
			}else{
				usuarioApellido = 'vacio';
			}

			if(usuario.pais){
				usuarioPais = usuario.pais;
			}else{
				usuarioPais = 'vacio';
			}
			*/

			/*
			return `<tr>
			<td>${(usuario.nombre) ? usuario.nombre : 'vacio'}</td>
			<td>${usuario.apellido ? usuario.apellido : 'vacio'}</td>
			<td>${usuario.pais ? usuario.pais : 'vacio'}</td>
			<td><button class="eliminar" data-indice=${indice}>Eliminar</button></td>
			</tr>`})
			*/

			return `<tr>
			<td>${usuarioNombre}</td>
			<td>${usuarioApellido}</td>
			<td>${usuarioPais}</td>
			<td><a class="ver" href="index2.html?usuario=${indice}">Ver</a></td>
			<td><button class="editar" data-indice=${indice}>Editar</button></td>
			<td><button class="eliminar" data-indice=${indice}>Eliminar</button></td>
			</tr>`})
		.join('');
	//console.log(usuariosRender);
	listaUsuarios.innerHTML = usuariosRender;
	// se ponen los botones durante el render por que aqui se crean
	botonesEliminar = document.getElementsByClassName('eliminar');
	botonesEditar = document.getElementsByClassName('editar');

	Array.from(botonesEliminar).forEach(botonEliminar => {
		botonEliminar.onclick = eliminarUnUsuario;	
	
	});

	Array.from(botonesEditar).forEach(botonEditar => {
		botonEditar.onclick = editarUnUsuario;	
	
	});
}



function enviarDatos(e){
	e.preventDefault();
	let accion = e.target.innerText;
	console.log('accion',accion);

 const datos = {nombre:nombre.value, 
	 apellido: apellido.value, 
	 pais: pais.value};

	let url = null;
	let method = null;

	if(accion === 'Crear'){
		url = 'https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios';
		method = 'POST';

	}else if(accion === 'Editar'){
		if(indice.value){
		url = `https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice.value}`;
		method = 'PUT';
		}else{
			return;
		}
	}else{
		return;
	}


  fetch(url, {
		  method: method, // or 'PUT'
		  headers: {
			      'Content-Type': 'application/json',
			    },
		  body: JSON.stringify(datos),
	})
	.then(response => {
 	console.log('response', response);	
	return response.json();
	})
	.then(respuestaJson => {
		console.log(respuestaJson);
		refrescar();
		restaurarBoton();
	}).catch(razon => {
      		console.log(razon);	
		restaurarBoton();
	})

	
}

function editarUnUsuario(e){
	e.preventDefault();
	console.log(e);

	if(e.target.dataset.indice){

	const usuario = usuarios[e.target.dataset.indice];
	nombre.value = usuario.nombre ? usuario.nombre : '';
	apellido.value = usuario.apellido ? usuario.apellido : '';
	pais.value = usuario.pais ? usuario.pais : '';
	indice.value = e.target.dataset.indice;
	boton.innerText = 'Editar';
	}else{
		botton.innerText = 'Crear';
	}


}

function eliminarUnUsuario(e){
	e.preventDefault();

	console.log(e);

	// para eliminar se usa el dataset que se asigna en data-indice en la fn render

  fetch(`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${e.target.dataset.indice}`, {
		  method: 'DELETE', // or 'PUT'
	})
	.then(response => {
 	console.log('response', response);	
	return response.json();
	})
	.then(respuestaJson => {
		console.log(respuestaJson);
		refrescar();
	})

}



function refrescar(){
  fetch('https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios') // hace peticion get
	.then(response => response.json())
	.then(respuestaUsuarios => {
		//console.log('respuesta Usuarios',respuestaUsuarios);
		usuarios = respuestaUsuarios;
		render();
	})
}

// CRUD

function restaurarBoton(){
	boton.innerText = 'Crear';
	indice.value = '';
	nombre.value = '';
	apellido.value = '';
	pais.value = '';
}

refrescar();

boton.onclick = enviarDatos;
limpiar.onclick = restaurarBoton;

