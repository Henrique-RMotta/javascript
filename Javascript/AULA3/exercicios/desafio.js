//algoritmo para checar se um numero é par
function numeropar(numero){
    return numero % 2 == 0;
}
console.log(numeropar(11));
console.log(numeropar(244));

//algoritimo para vacinação para COVID-19 acima de 60 anos
function vacinado(idade){
    return idade > 60;
}
console.log(vacinado(35));
console.log(vacinado(75));

//algoritimo para checar se um veiculo é um elétrico ou flex
function veiculo(tipo){
    return tipo == 'eletrico' || tipo == 'flex';
}
console.log(veiculo('eletrico'));
console.log(veiculo('flex'));
console.log(veiculo('gasolina'));