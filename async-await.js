// La promesa es un constructor

const fabricaDePromesas = (indice) => new Promise((resolve,reject) => {

 const tiempoRejected = Math.floor(Math.random() * 10000) + 1000;
 const tiempoResolve = Math.floor(Math.random() * 10000) + 1000;
 
 //console.log(`tiempo rejected ${tiempoRejected}`);
 //console.log(`tiempo resolve ${tiempoResolve}`);
/*	
 setTimeout(() => {
    reject(`La promesa ${indice} fallo`);
 },tiempoRejected);
 */

 setTimeout(() => {
    resolve(`La promesa ${indice} se cumplio`);
 },tiempoResolve);

});



async function asyncFunction(){
 try{
  let misPromesas = [];
   for(let i = 0; i < 10; i++){
   misPromesas = [...misPromesas, await fabricaDePromesas(i)];
 }
 console.log(misPromesas);
 //const miPromesa1 = await fabricaDePromesas(1);
 return misPromesas;

 } catch(error){
	 //console.log('Hubo un error');
	 //return error;
	 throw error;
 }
}

function miFuncion(){
 const miPromesa2 = fabricaDePromesas(2)
   .then(resultado => console.log(resultado))
   .catch(razon => console.log(razon));


	console.log(miPromesa2);
}



/* ***************************************************** */
/* 
 *
let misPromesas = [];
for(let i = 0; i < 10; i++){
 //console.log(i);
 misPromesas = [...misPromesas, fabricaDePromesas(i)];
}

Promise.race(misPromesas).then( respuesta => console.log(respuesta)).catch(razon => console.log(razon));

*/

// Usando método de constructor all
/*
misPromesas.forEach( promesaActual => promesaActual
	.then( respuesta => console.log(respuesta))
	.catch( razon => console.log(razon)));
*/

//miPromesa.then((respuesta) => console.log(respuesta), (razon) => console.log(razon));

