// 1 - imprimir 11 vezes a plavra ola mundo

for(let i = 0; i<= 11; i++){
    console.log("ola mundo");
}
// 2 - imprimir o resultado de uma tabuada
let numero = 2;
let tabuada = 1;
while (tabuada<=10){
    console.log(tabuada * numero);
    tabuada = tabuada + 1;
}
// 3 - imprimir a soma dos numeros impares de 1 a 100
let soma = 0
for(let i= 0; i<=100; i++ ){
 if(i %2 ==! 0){
    console.log(i);
    soma+= i
    if( soma === 2500){
        console.log(soma);
    }
 }
}

// 4 - contagem regressiva de 10 a 1 mas quando chegar no 1 imprimir feliz ano novo
for(let i =10 ; i>=1 ; i--){
    console.log(i);
    if(i === 1){
        console.log("feliz ano novo");
    }
   
}

// Exemplo 1: Verificação de Categoria de Idade
idade = 70
if(idade < 14){
    console.log("você é uma criança, aproveite, brinque bastante");
} else if(idade > 14 && idade <= 18){
    console.log("você é um adolescente, aproveite bastante, procure fazer coisas novas e escolher o que vai fazer da vida");
} else if (idade > 18 && idade <= 60 ){
    console.log("você é um adulto, cheio de responsabilidades, mas com sonhos e talvez uma familia, seja feliz e aproveite")
    } else if (idade > 60){
        console.log("você é um idoso,aproveite para descansar e viver")
    }

// Exemplo 2: Verificação de Nota com Mensagem
let notas = 90
if (notas >= 90 ) {
    console.log("Muito bom");
} else if (notas >=70 && notas < 90 ){
    console.log("bom");
} else if(notas >= 50 && notas < 70){
    console.log('regular');
} else if (notas< 50){
    console.log("irregular");
}
   
//Exemplo 3: Verificação de Dia da Semana
let dia= ["segunda- dia chato, começo da semana'", "terça-dia normal, pelo menos nao é segunda'", "quarta-dia ruim meio da semana, mas pelo menos não é segunda", "quinta -dia bom é quase sexta", "sexta - sextou dia muito bom,longe da segunda", "sabado - dia de descanso", "domingo - bom ,mas ta perto da segunda'"]
for(let i = 0 ; i<dia.length; i=i){
    console.log(dia[i]);
    break
}

// Exemplo 4: Verificação de Horário do Dia
let horas = 10
if(horas > 18 && horas < 24){
    console.log("boa noite");
}else if (horas < 18 && horas >= 12){
    console.log("boa tarde");
} else if (horas < 12 ){
    console.log("bom dia");
}

// Exemplo 5: Verificação de Peso Ideal
let peso= 50
let altura = 1.75
let imc = peso/(altura * altura)
if(imc < 18.5){
    console.log("muito magro");
}else if (imc > 18.5 && imc <= 24.9){
    console.log("está no peso certo")
}else if (imc > 24.9){
    console.log("acima do peso")
}


// Exemplo 6: Verificação de Número Primo
let number = 10

if (number === 2 || number === 3 || number === 5 || number === 7 ){
 console.log("este número é primo");
}else if (number %2 === 0 || number %3 === 0 || number %4 === 0 || number %5 === 0 || number %6 === 0 || number %7 === 0) {
    console.log("este número não primo");
} else {
    console.log("este numero é primo")
}

// Exemplo 7: Verificação de Ano Bissexto
let anobissexto = 2018
if (anobissexto %4 === 0  || anobissexto %400 === 0){
    console.log("este ano é bissexto")
} else {
    console.log("este ano não é bissexto")
}

//Exemplo 8: Verificação de Nota com Mensagem Personalizada ( a mesma que a segunda questão)
let nota = 90
if (nota >= 90 ) {
    console.log("Muito bom");
} else if (nota >=70 && nota < 90 ){
    console.log("bom");
} else if(nota >= 50 && nota < 70){
    console.log('regular');
} else if (nota< 50){
    console.log("irregular");
}

//Exemplo 9: Verificação de Temperatura com Mensagem
let temp = 19
if (temp >= 100 ) {
    console.log(" a partir disso a água ja fica em estado gasoso ");
} else if (temp >=70 && temp < 100 ){
    console.log(" nessa fase se ja ta falando de uma temperatura em que se cozinha algo");
} else if(temp >= 40 && temp < 70){
    console.log('muito quente já não da para seres humanos suportarem 🥵');
} else if (temp < 40 && temp >= 20){
    console.log(" quente 😐");
} else if (temp < 20 && temp  >= 0 ){
    console.log ("frio 🥶")
}

// Exemplo 10: Verificação de Desempenho de Vendas
let vendas = 80
if (vendas >= 100 ) {
    console.log(" lucrou muito, as vendas estão otimas ");
} else if (vendas >=80 && vendas < 100 ){
    console.log(" lucro, as vendas estão boas ");
} else if(vendas >= 50 && vendas < 80){
    console.log('aqui não é um estado muito bom, as vendas estão bem na média, e talvez até passar uns apertos');
} else if (vendas < 50 && vendas >= 20){
    console.log(" as vendas estão ruins, é preciso fazer algo");
} else if (vendas < 20 && vendas  >= 0 ){
    console.log (" as vendas estão péssimas, talvez a empresa terá que ser fechada ")
}