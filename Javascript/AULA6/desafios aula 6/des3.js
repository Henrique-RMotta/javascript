// calcular média de notas com base em duas notas , sendo a primeira 6 e a segunda 10 e mais 4 para trabalhos
function calculo(notas){
   let soma = 0
    for(i = 0 ; i< 3 ; i++){
        soma += notas[i];
    }
    return soma / 3;
}
let notas = [];
for ( i = 0 ; i < 3 ; i++) {
    let qtonotas  = parseFloat(prompt(`digite a nota ${i + 1 }: `));
    notas.push(qtonotas);
}

let media = calculo(valores);
alert (`a media é ${media} `);

// Lava rápido do joâo  - 3 serviços
// 1 - lavagem simples - R$20,00
//2 - Lavagem completa - R$ 30 ,00
//3 - Encerramento - R$ 50,00
// apresentar o valor total da compra ou serviço escolhido e valor final e o nome do cliente e placa do veiculo

let nome = String(prompt(`digite seu nome `));
let placa = String(prompt(`digite a placa `));
let 1 = "lavagem simples - R$20,00"; 
let 2 = "Lavagem completa - R$ 30 ,00" ;
let 3 = "Encerramento - R$ 50,00"

let tipo parseFloat(prompt)