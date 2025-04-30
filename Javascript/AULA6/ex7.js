function calcularMedia(numeros){
    let soma = 0 
    for(let i = 0; i < numeros.length; i++ ){
        soma += numeros[i];
    }
    return soma / numeros.length;
}
let numeros = [];
let quantidade = parseInt(prompt("quantos números você deseja inserir"));

for (let i = 0; i< quantidade; i++){
    let numero = parseFloat(prompt(`digite o numero ${i + 1 }: `));
    numeros.push(numero);
}

let media = calcularMedia(numeros);
alert(`a média é: ${media}`);