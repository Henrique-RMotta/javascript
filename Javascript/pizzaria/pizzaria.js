function exibirMensagem(texto,tipo){
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    //adciona a classe do estilo (sucesso ou erro)
    mensagem.className = `mensagem ${tipo}`;
    mensagem.classList.remove("hidden");

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.classList.add("hidden")
    }, 3000); 
}

function validarlogin(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    //usuario e senha fixos para validação
    // (você pode substituir por algo mais avançado)

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if(usuario === usuarioCorreto && senha === senhaCorreta){
        exibirMensagem("Login realizado com sucesso!", "sucesso");
        setTimeout(() => {
            // Redireciona para a página principal
            window.location.href = "index.html";
        },1000);
    } else {
        exibirMensagem("Usuário ou senha incorretos", "erro");
    }
}




let pizzas = [];
let pizzasalterar = null;
function mostrarsecao(secao){
    // escode as seções
    document.getElementById("cadastrar").classList.add("hidden");
    document.getElementById("cardapio").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");
    document.getElementById("msgerro").classList.add("hidden");
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
        document.getElementById("msgerro").innerHTML = `Pizza cadastrada com sucesso`
        document.getElementById("msgerro").classList.remove("hidden");
    } else {
        document.getElementById("msgerro").innerHTML = `Preencha todos os campos, ou houve um erro tente novamente mais tarde`
        document.getElementById("msgerro").classList.remove("hidden");
    }
   

}
function buscarpizza() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = pizzas.filter((pizza) => 
     pizza.nomepizza.toLowerCase().includes(busca)
);
    cardapio(resultados);
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
if(pizzasalterar){
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-nome").value = pizzasalterar.nomepizza;
    document.getElementById("novo-descricao").value = pizzasalterar.descricao;
    document.getElementById("novo-tamanho").value = pizzasalterar.tamanho;
    document.getElementById("novo-valor").value = pizzasalterar.valor;
} else {
    document.getElementById("msg").innerHTML = "Pizza não encontrada"
}
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
         document.getElementById("form-alterar").classList.add("hidden")
        document.getElementById("msg").innerHTML = "Pizza alterada com sucesso !!"
    } else {
        document.getElementById("msg").innerHTML = "Preencha todos os campos, ou houve um erro tente novamente mais tarde "
    }
}
}