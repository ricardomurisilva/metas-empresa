function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return b !== 0 ? a / b : null;
}

// TESTES

console.assert(soma(2, 3) === 5, "Erro na soma");
console.assert(subtracao(5, 3) === 2, "Erro na subtração");
console.assert(multiplicacao(2, 3) === 6, "Erro na multiplicação");
console.assert(divisao(6, 3) === 2, "Erro na divisão");
console.assert(divisao(6, 0) === null, "Erro divisão por zero");

console.log("Todos os testes passaram!");
