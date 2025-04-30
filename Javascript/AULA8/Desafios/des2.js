function nomeidade(){
    let nome = window.prompt("Digite seu nome")
    let idade = window.prompt("digite sua idade")
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = (` seu nome é ${nome} e sua idade é ${idade}`);
}