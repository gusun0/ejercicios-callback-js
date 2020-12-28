/*
const funcionDeCallback = () => {
   console.log('me ejecute despues');
}

const ejecutarMasTarde = () => {
  setTimeout(funcionDeCallback,3000);
};

ejecutarMasTarde();
*/

function sumar(num1,num2){
	return num1+num2;
}

function restar(num1,num2){
	return num1-num2;
}

function multiplicar(num1,num2){
	return num1*num2;
}

function division(num1,num2){
	return num1-num2;
}


console.log(sumar(5,7));
console.log(restar(5,7));
console.log(multiplicar(5,7));
console.log(division(5,7));

function multiFuncion(num1,num2,operacion){
	return operacion(num1,num2);
}

console.log(multiFuncion(2,2,restar));

