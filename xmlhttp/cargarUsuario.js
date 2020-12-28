let usuario = {};
const listaUsuario = document.getElementById('body-usuario');

function tomarIndiceUsuario(){
  return indiceUsuario = location.search.replace('?','').split('=')[1];

}

function obtenerUsuario(){
  fetch(`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${tomarIndiceUsuario()}`)
	.then(response => response.json())
	.then(respuestaUsuario => {
		console.log('respuesta Usuarios',respuestaUsuario);
		usuario = respuestaUsuario;
		render();
	})
}


function render(){


			
	let usuarioNombre = usuario.nombre ? usuario.nombre : 'vacio';
	let usuarioApellido = usuario.apellido ? usuario.apellido : 'vacio';
	let usuarioPais = usuario.pais ? usuario.pais : 'vacio';

	const usuarioRender = `<tr><td class="campo-usuario">Nombre</td>
	<td>${usuarioNombre}</td></tr>
	<tr><td class="campo-usuario">Apellido</td><td>${usuarioApellido}</td></tr>
	<tr><td class="campo-usuario">País</td><td>${usuarioPais}</td></tr>
	</tr>`;

//	console.log(usuarioRender);

	
	listaUsuario.innerHTML = usuarioRender;
}

obtenerUsuario();
