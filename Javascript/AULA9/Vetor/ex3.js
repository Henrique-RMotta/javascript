function inverterVetorTela(){
    const vetor = document.getElementById("vetorInversao").value.split(",").map(Number);
    document.getElementById("resultadoInversao").innerHTML = "Vetor Invertido" + vetor.reverse();
}