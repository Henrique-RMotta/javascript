alert("bem-vindo a loja");
let nome = prompt("Digite seu nome");
let quantidade = parseInt(prompt("digite quantos produtos você comprou"));


function promocao(quantidade){
 if (quantidade >= 10 && quantidade < 20 ){
    alert(`${nome} ,você possui um desconto de 10% no seu proximo produto`);
 } else if (quantidade >= 20 ){
    alert(`${nome}, você possui vários  descontos.`);
    alert("você é vip, ou seja, você ganhou mais um desconto de 10% bonus");
 }else {
    alert(`${nome}, você não possui descontos e nao é vip .`);
 }
}
promocao(quantidade);
