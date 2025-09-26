function msg() {
  console.log("teste de função");
}

function soma(a, b) {
  return a + b;
}

const resultado = soma(10,100);

msg();
console.log("Soma:", soma(10, 50));

const numeros = [10, 20, 60, 10, 30];
let total = 0;

function media(nums) {
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total / nums.length;
}

console.log("A média do vetor é:", media(numeros));
