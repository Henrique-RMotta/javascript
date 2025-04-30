function calculartroco(){
    let nomeproduto = window.prompt("Qual produto você comprou");
    let valorproduto = Number(window.prompt("Qual é o valor do produto"));
    let valorpago = Number(window.prompt("Qual o valor pago"));
    let troco = valorpago - valorproduto 
    let resultado = document.getElementById('resultado');
    if(troco === 0){
        resultado.innerHTML = (`O cliente pagou o valor total do ${nomeproduto}, portanto não haverá troco`);
    } else if (troco > 0 ){
        resultado.innerHTML = (`O cliente pagou R$${valorpago.toFixed(2)}, mas o produto tem o valor de R$${valorproduto.toFixed(2)}, portanto o troco será de R$${troco.toFixed(2)}`);
    } else {
        resultado.innerHTML = (`Ocorreu algum erro`);
    }
}