let movel = [];
function cadastrarmovel(){
    let tipo = prompt("qual é o tipo do movel");
    let material = prompt ("qual é o material deste móvel");
    let preço = parseFloat(prompt("qual o preço "));
    let cor = prompt("qual é a cor do seu móvel");
    movel.push(tipo,material,preço,cor);
}

function listarmóvel(){
    if (movel.lenght > 0 ){
        let mensagem = "listar materiais \n";
    } move.forEach((moveis) => {
        mensagem += `tipo: ${moveis.tipo} \n `
        
    });
}