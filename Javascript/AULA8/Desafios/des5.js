function converte(){
    let reais = Number(window.prompt("DIgite o valor em dolares"))
    let dolar = 5.70 ;
    let converter = reais * dolar;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`O valor em reais é R$${converter.toFixed(2)}`);
}
function converte2(){
    let reais = Number(window.prompt("DIgite o valor em reais"))
    let dolar = 5.70 ;
    let converter = reais / dolar;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`O valor em dolares é $${converter.toFixed(2)}`);
}