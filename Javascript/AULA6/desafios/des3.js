// calcular média de notas com base em duas notas , sendo a primeira 6 e a segunda 10 e mais 4 para trabalhos

function media(notas){
    let media = 0 
    for (i = 0; i < 3; i++){
        notas [i] = notas[i]/2
        media += notas[i];
    }
    return media
} 

let notas = [];
for (i = 0; i< 3 ; i++){
    let nota = parseFloat(prompt(`qual é a nota ${i + 1}`));
    notas.push(nota);
}

let total = media(notas);
alert(`a média é ${total}`);
