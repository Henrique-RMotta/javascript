alert("Faça seu Cadastro")
let nome = prompt("Digite seu nome");
let senha = prompt("Digite sua senha");

alert("agora faça seu login no sistema");
let nomelogin = prompt("Digite seu nome novamente");
let senhalogin = prompt("Digite sua senha novamente")
if (nomelogin === nome && senha === senhalogin){
    alert("Você obteve acesso ao sistema");
} else {
    alert("tente novamente, seu login está incorreto");
}