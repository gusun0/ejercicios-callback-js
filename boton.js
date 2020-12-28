/*
const miBoton = document.getElementById('miboton');
const ejecutarCuandoHagaClickEnELBoton = evento => {
 //console.log(evento);
 console.log('1');
// alert('diste click en el boton');
}

miBoton.addEventListener('click',ejecutarCuandoHagaClickEnELBoton);


ejecutarCuandoHagaClickEnELBoton();

*/

const funcion1 = () => {
 console.log('ejecucion 1');
 setTimeout(() => {
 console.log('ejecucion 2');
   setTimeout(() => {
    console.log('ejecucion 3');
	   setTimeout(() => {
    console.log('ejecucion 4');
	   },4000);
   },10000);
 },2000);
}


setTimeout(funcion1,3000);

