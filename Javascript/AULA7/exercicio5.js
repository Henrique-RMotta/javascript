alert(`bem vindo ao cadastrador de cd`);

function cadastrarcd(){
let titulo = prompt("cadastre o titulo do cd");
let artista = prompt("digite o artista");
let ano = parseFloat(prompt("digite o ano de lançamento do cd"));
let preco = parseFloat(prompt("digite o preco"));
alert(`seu cd cadastrado foi \n Titulo: ${titulo}\n Artista: ${artista}\n Ano: ${ano}\n Preço:${preco}`);
}
cadastrarcd();

