const formElement = document.querySelector(".form");
console.log("Funcionou");

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  console.log("Teste");
  
  fetch("https://68e04c9093207c4b479429fa.mockapi.io/clientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  await ((response) => response.json());
  await ((dados) => alert("Gravado com sucesso! "));
});

console.log("Teste final");
console.log("Teste final");
console.log("Teste final");
