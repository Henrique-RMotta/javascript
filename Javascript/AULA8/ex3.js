let contador = 0;
let resultado = document.getElementById('resultado')
function contar(){
 contador ++
 resultado.innerHTML = `<p> Agora o contador está <mark>${contador} </mark>.</p>`
}

function zerar(){
 contador = 0
 resultado.innerHTML = `<p> contador foi zerado. </p>`
}


let dim = document.getElementById('diminuir')
function diminuir(){
 contador --
 resultado.innerHTML = `<p> agora o contador está em <strong style= 'color:green;'>${contador} </strong>`
}