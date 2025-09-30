const listaPedidos = [
  { num: 123, status: "Entregue", total: 1000 },
  { num: 124, status: "Entregue", total: 3000 },
  { num: 126, status: "Enviado", total: 4000 },
];

let acum = 0;
for (let i = 0; i < listaPedidos.length; i++) {
    acum += listaPedidos[i].total;
}

console.log(listaPedidos.reduce((acum, pedido)=> acum + pedido.total,0));

