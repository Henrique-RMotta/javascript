// condicionais if else else if
let nota = 75;
if (nota >= 80){
    console.log('aprovado 👍');
} else if (nota < 80 && nota >= 60){
    console.log('lista de espera 😮');
} else {
    console.log('reprovado 😭');
}

let vacina = 75
if(vacina >=60) { 
    console.log('precisa vacinar');
} else if (vacina < 60 && vacina > 15){
    console.log('lista de espera');
} else {
    console.log('não precisa vacinar');
}

//notas

let notas = 80
if (notas >= 90) {
    console.log('exelente');
} else if (notas >= 80 && notas < 90){
    console.log('quase la');
} else if(notas >= 70 && notas < 80){
    console.log('passou perto');
} else if(notas >= 60 && notas < 70){
    console.log('ta abaixo');
} else if(notas >= 50 && notas < 60){
    console.log('regular');
} else {
    console.log('reprovado');
}

// hora do dia
let dia = 10
if(dia < 12){
    console.log('Bom dia');
} else if(dia > 12 && dia < 18 ) {
    console.log('boa tarde');
} else {
    console.log('Boa noite')
}

// dia da semana
let dias = 'domingo';
if(dias === 'segunda'){
    console.log('dia chato, começo da semana');
} else if(dias === 'terça'){
    console.log('dia normal, pelo menos nao é segunda');
} else if(dias === 'quarta') { 
    console.log('dia ruim meio da semana, mas pelo menos não é segunda');
} else if(dias === 'quinta') {
    console.log('dia bom é quase sexta');
} else if(dias === 'sexta') {
    console.log('sextou dia muito bom,longe da segunda');
} else if(dias === 'sabado') {
    console.log(' dia de descanso');
} else if(dias === 'domingo'){
    console.log('bom ,mas ta perto da segunda');
}