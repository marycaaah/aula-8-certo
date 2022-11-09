// É declarado uma function calculando idade + anos e perguntando nome
function calculadoraIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos}
    anos de idade.`;
};
// É objeto declarado como const, declarando duas propriedades com valores
const pessoal = {
    nome: 'Amelia',
    idade: 23,
};
// É objeto declarado como const, declarando duas propriedades com valores
const pessoa2 = {
    nome: 'Márcia',
    idade: 20,
};
// É objeto declarado como const, declarando duas propriedades com valores
const pessoa3 = {
    nome: 'Jonas',
    idade: 13,
};
// Resultado de idade + anos e foi adicionado o alert com a mesma funçao
console.log(calculadoraIdade.call(pessoa3, 40));
console.log(calculadoraIdade.apply(pessoa2, [24]));
alert(calculadoraIdade.call(pessoa3, 40));
alert(calculadoraIdade.apply(pessoa2, [24]));