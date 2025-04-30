// Lava rápido do joâo  - 3 serviços
//1 - lavagem simples - R$20,00
//2 - Lavagem completa - R$ 30 ,00
//3 - Encerramento - R$ 50,00
// apresentar o valor total da compra ou serviço escolhido e valor final e o nome do cliente e placa do veiculo


alert (`Seja bem vindo ao lava rápido do joão`);
alert (`Escolha pelos seguintes serviços:
-lavagem simples - R$20 
-lavagem completa - R$30
-encerramento - R$50`);
let nome = String(prompt(`Por favor digite seu nome `));
let placa = String(prompt(`digite sua placa `));
let serviços = [];
let quantidadedetipos = parseInt(prompt(`quantos serviços será escolhido`));
function soma(valores){
    let soma = 0;
    for  (let i = 0 ; i < valores.length; i++){
        soma += valores[i]; 
    }
    return soma
 }  
let valores = [];

for ( let i = 0; i< quantidadedetipos ; i++ ){
let serviço = parseFloat(prompt(`serviço ${i + 1}`));
if (serviço === 1){
    alert(`a lavagem escolhida foi a: lavagem simples - R$20`);
    let valor1 = 20;
    valores.push(valor1);
    serviços.push("lavagem simples - R$20");
} else if (serviço === 2){
    alert(`a lavagem escolhida foi a: lavagem completa - R$30`); 
    let valor2 = 30;
    valores.push(valor2);
    serviços.push("lavagem completa - R$30");
} else if (serviço === 3){
    alert(`a lavagem escolhida foi a: encerramento - R$50 `); 
    let valor3 = 50;
    valores.push(valor3);
    serviços.push("encerramento - R$50");
} else {
    alert(`o serviço escolhido não existe, ou houve um erro. Tente novamente`);
}
}

let total = soma(valores);
alert(`-seu nome é: ${nome} 
-com a placa: ${placa}  
-a lavagem escolhida foi: ${serviços} 
-com um total de:R$${total}`);