alert("seja bem vindo ao verificador de idade e habilitação");
let nome = prompt(" Seu nome ");
let idade = parseInt(prompt("Qual é a sua idade"));

if (idade >= 18) {
    let hab = parseInt(prompt("você tem habilitação \n - se sim, digite 1 \n - se nao digite 2 "));
    if (idade >= 18 && hab === 1){
        alert(`${nome}, você possui ${idade} anos. \nisso significa que você é maior de idade e possui habilitação `);
    } else if (idade >= 18 && hab === 2) {
        alert(`${nome}, você possui ${idade} anos. \nisso significa que você é maior de idade mas não possui habilitação `);
    }
} else {
     alert(`${nome}, você possui ${idade} anos. \nisso significa que você é menor de idade, então não possui habilitação `)
}



