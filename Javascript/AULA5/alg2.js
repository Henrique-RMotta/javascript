//imprimir numeros pares de 1 a 20;

for (let i = 12; i<=100; i++){
    if(i% 2 === 0 ) {
        console.log(i);
    }
}

let numero = 5 ;
numero = Number(numero);
let fatorial = 1;
for(let i =1 ; i<= numero ; i++){
    fatorial *= i;
}
console.log(`o fatorial de ${numero} é ${fatorial}.`);

//Iterar sobre um array;
let frutas = ["maçã", "banana", "laranja"];
for(let i = 0; i <frutas.length; i++){
    console.log(frutas[i]);
}

//itinerar valores de outro tema
let esportes = ["futebol", "basquete", "volei", "futebol americano", "natação"]
for(let i = 0 ; i<esportes.length; i++){
    console.log(esportes[i]);
}

//exemplo do bruno
let carro = ["fusca", "Gol" , "Palio"];
for (let i = 1 ; i< carro.length; i++){
    console.log(carro[i]);
}

let soma = 0;
for(let i = 10; i <=10; i++){
    soma +=i;
}
console.log(soma);