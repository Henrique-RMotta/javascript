function total(){
let preco = Number(window.prompt("digte o valor do produto"))
let porc = Number(window.prompt("digite a porcentagem de desconto"))
let valor = (preco* porc) / 100
let total = preco - valor
let res = document.getElementById('result')

// mensagem e valores com casas decimais 
res.innerHTML = `<p> O produto custa R$${preco.toFixed(2)}. </p>`
res.innerHTML += `<p> Um desconto de ${porc}% sobre ele será de R$${valor.toFixed(2)}. </p>`
res.innerHTML += `<p> o valor final a ser pago será de <mark><strong>  R$${total.toFixed(2)}. </strong> </mark> </p>`
}