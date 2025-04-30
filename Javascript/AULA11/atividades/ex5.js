let puxar = [];
function reserva() {
    let produto = document.getElementById("pegarproduto").value;
    puxar.push({produto})
    max = 2
    min = 1
    let produtodisponível = Math.floor(Math.random() * (max - min + 1)) + min
    if (produtodisponível === 2) {
        let resultados = document.getElementById("resultados");
        resultados.innerHTML = `<p> O(a) <strong>${produto}</strong> está disponível para reserva.</p>`
        resultados.innerHTML += `<button onclick="confirmareserva()">Clique aqui para fazer a reserva</button>`
        resultados.innerHTML += `<button onclick="desreserva()">Clique aqui para retorna ao menu</button>`
    } else {
        resultados.innerHTML = `<p> O(a) <strong>${produto}</strong> não está disponível para reserva.</p>`
    }
}
function confirmareserva() {
    let senha = parseInt(prompt("Digite uma senha com números inteiros."));
    let cep = parseInt(prompt("Digite seu CEP:"));
    let cpf = parseInt(prompt("Digite seu CPF:"));
    let resultados = document.getElementById("resultados");
    max = 90
    min = 30
    let diasdeentrega = Math.floor(Math.random() * (max - min + 1)) + min
    puxar.forEach((v) => {
        resultados.innerHTML = `<p> O produto ${v.produto} <br>Foi reservado no CPF:${cpf}, será enviado no CEP: ${cep}<br> Em um prazo máximo de ${diasdeentrega} dias <br> Utilize a senha ${senha} para retirar produto.</p>`
    })
}
function desreserva() {
    document.getElementById("resultados").innerHTML = `<p> Ohh <strong>que pena</strong> que não quis reserva, volte sempre!!!.</p>`
}
