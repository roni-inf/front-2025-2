const pessoas = [
  { nome: "João", idade: 25, cidade: "Rio de Janeiro" },
  { nome: "Ana", idade: 15, cidade: "Juiz de Fora" },
  { nome: "Paulo", idade: 56, cidade: "Juiz de Fora" },
  { nome: "Igor", idade: 23, cidade: "Petrópolis" },
];

// const novoFiltro = pessoas
//   .filter((p) => p.cidade === "Juiz de Fora" && p.idade >= 18)
//   .forEach((p) => console.log(p));
// console.log(novoFiltro);

const filtroNome = pessoas.filter((pessoa) =>
  pessoa.nome.toUpperCase().toLowerCase().startsWith("p")
);
console.log(filtroNome);
console.log(filtroNome);

// pessoas.find((p) => p.idade >= 18);
