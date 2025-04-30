function antesdepois(){
    let numero = Number(window.prompt('Digite um número'))
    let numero_dps = numero + 1;
    let numero_ant = numero - 1 ; 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`Seu número é: ${numero}, seu sucessor é ${numero_dps} e seu antecessor é: ${numero_ant}`);
}