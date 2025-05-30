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
    document.getElementById("venda").classList.add("hidden");
    document.getElementById("msgerro").classList.add("hidden");
    document.getElementById("msg").classList.add("hidden");
    document.getElementById("relatorio-vendas").classList.add("hidden");
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
         setTimeout(() => {
      document.getElementById("msgerro").classList.add("hidden");
    }, 3000); 
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
     document.getElementById("msg").classList.remove("hidden");
      setTimeout(() => {
      document.getElementById("msg").classList.add("hidden");
    }, 3000); 
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
        document.getElementById("msg").classList.remove("hidden");
        document.getElementById("msg").innerHTML = "Pizza alterada com sucesso !!"
         setTimeout(() => {
        document.getElementById("form-alterar").classList.add("hidden")
        document.getElementById("msg").classList.add("hidden");
        }, 3000); 
        }
    } else {
        document.getElementById("msg").innerHTML = "Preencha todos os campos, ou houve um erro tente novamente mais tarde "
        document.getElementById("msg").classList.remove("hidden");
        setTimeout(() => {
      document.getElementById("msg").classList.add("hidden");
    }, 3000); 
    }
}

let vendas = [];// array para armazenar as vendas
let nomevenda = null;
function buscarvenda (){
    const busca = document.getElementById("busca-venda").value.toLowerCase();
    document.getElementById("msg-venda").classList.add("hidden");
    nomevenda = pizzas.find((pizza) =>
    pizza.nomepizza.toLowerCase().includes(busca))
    if(nomevenda){
         document.getElementById('venda-nome').value = nomevenda.nomepizza;
        document.getElementById('venda-preco').value = nomevenda.valor;
         document.getElementById("form-venda").classList.remove("hidden");
    } else {
        setTimeout(() => {
        document.getElementById("msg-venda").classList.remove("hidden");
        document.getElementById("msg-venda").innerHTML = "Pizza não encontrada"
    }, 5000); 
      document.getElementById("msg-venda").classList.add("hidden");
    }
}
function registrarvenda() {
    const nome = document.getElementById('venda-nome').value 
    const preco = parseFloat(document.getElementById('venda-preco').value) 
    const nomevenda = pizzas.find((pizza) =>
    pizza.nomepizza.toLowerCase().includes(nome))
    const precovenda = pizzas.find(pizzavalor => pizzavalor.valor === preco)
    const comprador = document.getElementById('venda-comprador').value;

    if (nomevenda != undefined && precovenda != undefined && comprador){
        const listavendas = document.getElementById('lista-vendas');
        const item = document.createElement('li');
        item.textContent = `Pizza: ${nome}, Preço:R$${preco}, Comprador: ${comprador}`;
        listavendas.appendChild(item);

        //Adicionar venda ao array de vendas
        vendas.push({nome,preco,comprador});

        document.getElementById('venda-nome').value = '';
        document.getElementById('venda-preco').value = '';
        document.getElementById('venda-comprador').value = ''
        setTimeout(() => {
        document.getElementById("form-venda").classList.add("hidden");
    }, 5000); 
       
    } else {
        document.getElementById('venda-nome').value = "Pizza não encontrada"
        document.getElementById('venda-preco').value = 0
        document.getElementById('venda-comprador').value = ''
        setTimeout(() => {
        document.getElementById('venda-nome').value = ""
        document.getElementById('venda-preco').value = ""
    }, 3000); 
    }
}


function gerarrelatoriovendas () {
    const tabelarelatorio = document.getElementById('tabela-relatorio-vendas');
    tabelarelatorio.innerHTML = '' // limpar tabela
    if(vendas.length === 0){
        alert('Nenhuma venda registrada');
        return;
    }
    let totalvendas = 0;
    if(totalvendas.length === 0){
        alert('valor de venda não registrado')
        return;
    }
    vendas.forEach((venda) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${venda.nome}</td>
        <td>R$${venda.preco.toFixed(2)}</td>
        <td>${venda.comprador}</td>
        `;
        tabelarelatorio.appendChild(linha);

        //somar o preço total de vendas
        totalvendas += parseFloat(venda.preco);
    })
    //adiciona uma linha para o total de vendas
    const linhaTotal = document.createElement('tr');
    linhaTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$${totalvendas.toFixed(2)}</strong></td>
    <td></td>`
    tabelarelatorio.appendChild(linhaTotal)
    //exibir aa área do relatório
    document.getElementById('relatorio-vendas').classList.remove('hidden')
}