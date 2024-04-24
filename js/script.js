//Trabajando con funciones
//Funciones declarativas
//              Parámetros
function sumar(valor1,valor2){
  return valor1 + valor2;  
}

//Invocando la función
//                Argumentos - Valores 
let resultado = sumar(10,20);
let resultado1 = sumar(100,500);
console.log(resultado);
console.log(resultado1);

console.log(sumar(500,500));

//Funciones expresadas
let saludar = function(nombre){
     return 'Hola como vamos '+nombre;
}

console.log(saludar('Daniel'));

console.log('Trabajando con Arrow Function');
//Función flecha - arrow function
//let operacion = (numero1,numero2)=> numero1 + numero2;

let operacion = (valor1,valor2,operador)=>{
    if(operador=== 'sumar'){
        return valor1 + valor2;
    }else if(operador === 'restar'){
        return valor1 - valor2;
    }else if(operador === 'multiplicar'){
        return valor1 * valor2;
    }else if(operador === 'dividir'){
        return valor1 / valor2;
    }else{
        return 'Debes indicar: sumar - restar - mulplicar - dividir'
    }

}

console.log(operacion(10,2,'multiplicar'));
console.log(operacion(1000,5,'dividir'));
console.log(operacion(6000,10,'sumar'));
console.log(operacion(6000,10,'otra cosa'));

let saludo = (nombre) => {
    return  `Hola,  ${nombre}`;
   };
   
   console.log(saludo('Gloria')); // Imprime: Hola, Gloria
   

