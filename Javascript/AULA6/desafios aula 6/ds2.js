function soma (valores) {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
     }
     return soma
}
let valores = [];
let quantidade = parseInt(prompt("quantos produtos você deseja inserir"));

for (let i = 0; i< quantidade; i++){
    let valor = parseFloat(prompt(`digite o valor ${i + 1 }: `));
    valores.push(valor);
}
let total = soma(valores);
alert(soma(`a soma é ${total}`));