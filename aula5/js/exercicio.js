let data = new Date();
let hora = data.getHours;
if (hora < 12) {
  alert("Bom dia!");
  // document.write("Bom dia");
} else if (hora < 18) {
  alert("Boa tarde!");
  // document.write("Bom tarde");
} else {
  alert("Boa noite!");
  // document.write("Boa noite");
}

function atualizarTexto() {
  const valor = document.getElementById("nome").value;
  document.getElementById("msg").innerHTML = valor;
}
