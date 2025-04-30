function calcularSoma(){
    const vetor = document.getElementById("vetorSoma").value.split(",").map(Number);
    let soma = 0;
    for (let i = 0; i< vetor.length; i++){
        soma+= vetor[i];
    }
    document.getElementById("resultadoSoma").innerHTML = "Soma:" + soma;
}