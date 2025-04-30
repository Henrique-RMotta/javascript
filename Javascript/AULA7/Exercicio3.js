alert("Seja Bem vindo ao verificador eleitoral");
let nome = prompt("digite seu nome");
let idade = parseInt(prompt("digite sua idade"));
let nacionalidade = prompt("digite sua nacionalidade");

function verificador(idade,nacionalidade){
    if (idade >= 18 && nacionalidade === "Brasileiro"){
        return alert(`Caro(a) ${nome},\n o senhor pode votar.`);
    } else if(idade >= 18 && nacionalidade != "Brasileiro") {
        return alert(`Caro(a) ${nome},\n o senhor não pode votar, mas você pode fazer um cadastro para conseguir.`);
    } else if (idade >= 16 && idade < 18 && nacionalidade != "Brasileiro") {
        return alert(`Caro(a) ${nome},\n o senhor pode votar mas não é obrigatório.`);
    }
} verificador(idade,nacionalidade);
