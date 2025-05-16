let pizzas = [];
let pizzasalterar = null;
function mostrarsecao(secao){
    // escode as seções
    document.getElementById("cadastrar").classList.add("hidden");
    document.getElementById("cardapio").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");
    // mostra a seção de selecionada
    document.getElementById(secao).classList.remove("hidden");
}

function cadastrarpizza() {
    // define as propriedades da pizza
    const nomepizza = document.getElementById("nomepizza").value;
    const descricao = document.getElementById("descricao").value;
    const tamanho = document.getElementById("tamanho").value;
    const valor = parseFloat(document.getElementById("valor").value);
    //puxa a pizza para o array
    if(nomepizza && descricao && tamanho && valor ){
        pizzas.push({nomepizza,descricao,tamanho,valor});
        document.getElementById("nomepizza").value = "";
        document.getElementById("tamanho").value = "";
        document.getElementById("valor").value = "";
        document.getElementById("descricao").value = "";
        cardapio();
        document.getElementById("msgerro").innerHTML = "Pizza cadastrada com sucesso"
    } else {
        document.getElementById("msgerro").innerHTML = "Preencha todos os campos, ou houve um erro tente novamente mais tarde "
    }

}

function cardapio(lista = pizzas){
    const tabela = document.getElementById("lista-pizzas");
    tabela.innerHTML = "";

    lista.forEach((pizza) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${pizza.nomepizza}</td>
        <td>${pizza.tamanho}</td>
        <td>${pizza.descricao}</td>
        <td>${pizza.valor}</td>
        `;
        tabela.appendChild(linha);
    });
}
function buscaralterar (){
const busca = document.getElementById("busca-alterar").value.toLowerCase();
pizzasalterar = pizzas.find((pizza) =>
    pizza.nomepizza.toLowerCase().includes(busca)
);
}


function alterarpizza (){
if(pizzasalterar){
    const novonome = document.getElementById("novo-nome").value;
    const novodescricao = document.getElementById("novo-descricao").value;
    const novotamanho = document.getElementById("novo-tamanho").value;
    const novovalor = parseFloat(document.getElementById("novo-valor").value);
    if(novonome && novodescricao && novotamanho && novovalor){
        pizzasalterar.nomepizza = novonome;
        pizzasalterar.descricao = novodescricao;
        pizzasalterar.tamanho = novotamanho;
        pizzasalterar.valor = novovalor;
        cardapio();
        document.getElementById("msg").innerHTML = "Pizza alterada com sucesso !!"
    } else {
        document.getElementById("msg").innerHTML = "Preencha todos os campos, ou houve um erro tente novamente mais tarde "
    }
}
}