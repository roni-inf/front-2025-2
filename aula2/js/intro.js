//Escopo - amplo - público
var num = 10;

//escopo do bloco que foi criado
let nome = "Roni";

//constante - escopo do bloco que foi criado
const lotacao = "Petrópolis";

let teste;
idade = 50;
idade = true;

if (num == 10) {
  teste = "oi";
}

//console.log(idade);

const a = { nome: "Maria", sobrenome: "Silva", idade: 20 };
// console.log(a.nome);

//Igualdade Fraca ou abstrata
console.log("10" == 10);

//Igualdade estrita
console.log("10" === 10);

let media = 7.5;

//media < 7 reprovado - maior que 7 aprovado - maior que 9 - aprovado com excelência
console.log(
  media >= 9 ? "aprovado com excelência" : media >= 7 ? "aprovado" : "reprovado"
);

let statusPedido = "Aguardando Envio";
let statusPagamento = "Pago";

// se statusPedido ==  Aguardando envio e statusPagamento = Pago - entrega liberada senão entrega não liberada
console.log(
  statusPedido == "Aguardando Envio" && statusPagamento == "Pago"
    ? "Entrega liberada"
    : "Entrega não liberada"
);

//Vetor

let times = new Array();
let cores = [];
let cursos = ["Java", "PHP", "Node", "C#"];

cores.push("Azul", "Amarelo");
cores.push("Branco");
cores.unshift("Preto");
cores.sort();
cores.reverse();

// for (let i = 0; i < cores.length; i++) {
//   console.log(cores[i]);
// }

// cores.forEach((f) => console.log(f));

const livros = [
  {
    titulo: "Redes",
    autor: "Laércio de Vasconcelos",
    paginas: 200,
    lingua: "Português",
    disponivel: true,
  },
  {
    titulo: "Java",
    autor: "Deitel",
    paginas: 1000,
    lingua: "Português",
    disponivel: true,
  },
];
