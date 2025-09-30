//Function Declaration
function calcular1(a, b) {
  return a * b;
}

//Função Anônima
let calcular2 = function (a, b) {
  return a * b;
};

//Arrow Function
let calcular3 = (a, b) => a * b;

const numeros = [10, 2, 5, 2, 8, 3];
numeros.push(5);
const novoArray = [];

for (let i = 0; i < numeros.length; i++) {
  novoArray.push(numeros[i] * 2);
}

//map
const novoArrayMap = numeros.map((numero) => numero * 2);
//console.log(novoArrayMap);

const nomes = ["Aline", "Carlos", "Maria", "Jorge"];

//A primeira letra de cada nome usando a função map
//console.log(nomes.map((nome) => nome.substring(0, 2)));

const a = 1000;
const b = "teste";

//console.log("Resultado:" + a + " - " + b);
console.log(`Resultado ${a} - ${b}`);

