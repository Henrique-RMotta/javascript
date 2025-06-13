// Exibe uma mensagem de sucesso ou erro na tela
function exibirMensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.className = `mensagem mensagem-${tipo}`;
    mensagem.classList.remove("hidden");

    setTimeout(() => {
        mensagem.classList.add("hidden")
    }, 3000);
}

// Valida o login do usuário
function validarlogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        exibirMensagem("Login realizado com sucesso!", "sucesso");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        exibirMensagem("Usuário ou senha incorretos", "erro");
    }
}

// Array para armazenar as pizzas cadastradas
let pizzas = [];
// Variável para armazenar a pizza que será alterada
let pizzasalterar = null;

// Mostra apenas a seção selecionada e esconde as outras
function mostrarsecao(secao) {
    document.getElementById("cadastrar").classList.add("hidden");
    document.getElementById("cardapio").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");
    document.getElementById("venda").classList.add("hidden");
    document.getElementById("relatorio-vendas").classList.add("hidden");
    document.getElementById(secao).classList.remove("hidden");
}

// Cadastrar
function cadastrarpizza() {
    const nomepizza = document.getElementById("nomepizza").value;
    const nomerepetido = pizzas.find((pizza) => pizza.nomepizza == nomepizza);
    const tamanho = document.getElementById("tamanho").value;
    const tamanhorepetido = pizzas.find((pizza) => pizza.tamanho == tamanho);
    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    document.getElementById("msgerro").classList.add("hidden");
    if (nomepizza && descricao && tamanho && valor) {
        // Verifica se a pizza já foi cadastrada
        if (nomerepetido!= undefined && tamanhorepetido != undefined) {
            document.getElementById("msgerro").innerHTML = `Pizza já cadastrada`
            document.getElementById("msgerro").classList.remove("hidden");
            setTimeout(() => {
            document.getElementById("msgerro").classList.add("hidden");
        }, 3000);
        } else {
            pizzas.push({ nomepizza, descricao, tamanho, valor });
            document.getElementById("nomepizza").value = "";
            document.getElementById("tamanho").value = "";
            document.getElementById("valor").value = "";
            document.getElementById("descricao").value = "";
            cardapio();
            document.getElementById("msgerro").innerHTML = `Pizza cadastrada com sucesso`
            document.getElementById("msgerro").classList.remove("hidden");
            setTimeout(() => {
            document.getElementById("msgerro").classList.add("hidden");
        }, 3000);
        }
    } else {
        document.getElementById("msgerro").innerHTML = `Preencha todos os campos, ou houve um erro tente novamente mais tarde`
        document.getElementById("msgerro").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("msgerro").classList.add("hidden");
        }, 3000);
    }
}

// Busca de pizzas - Cardápio
function buscarpizza() {
    document.getElementById("msg-cardapio").classList.add("hidden");
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = pizzas.filter((pizza) =>
        pizza.nomepizza.toLowerCase().includes(busca)
    );
    cardapio(resultados);
    if(resultados == ""){
         document.getElementById("msg-cardapio").classList.remove("hidden");
         document.getElementById("msg-cardapio").innerHTML = `Pizza não encontrada`
         setTimeout(() => {
            document.getElementById("msg-cardapio").classList.add("hidden");
        }, 3000);
    }
}

//cardápio 
function cardapio(lista = pizzas) {
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

// Busca pizza para alterar pelo nome
function buscaralterar() {
    const busca = document.getElementById("busca-alterar").value.toLowerCase();
    pizzasalterar = pizzas.find((pizza) =>
        pizza.nomepizza.toLowerCase().includes(busca)
    );
    document.getElementById("msg").classList.add("hidden");
    document.getElementById("msg2").classList.add("hidden");
    if (pizzasalterar) {
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

// Alterar a pizza
function alterarpizza() {
    if (pizzasalterar) {
        const novonome = document.getElementById("novo-nome").value;
        const nomerepetido = pizzas.find((pizza) => pizza.nomepizza == novonome);
        const novodescricao = document.getElementById("novo-descricao").value;
        const novotamanho = document.getElementById("novo-tamanho").value;
        const tamanhorepetido = pizzas.find((pizza) => pizza.tamanho == novotamanho);
        const novovalor = parseFloat(document.getElementById("novo-valor").value);
        document.getElementById("msg").classList.add("hidden");
        document.getElementById("msg2").classList.add("hidden");
        if (novonome && novodescricao && novotamanho && novovalor) {
            if (nomerepetido!= undefined && tamanhorepetido != undefined){
            document.getElementById("msg2").classList.remove("hidden");
            document.getElementById("msg2").innerHTML = "Esta pizza já existe"
            setTimeout(() => {
                document.getElementById("msg2").classList.add("hidden");
            }, 3000);
            }else {
            pizzasalterar.nomepizza = novonome;
            pizzasalterar.descricao = novodescricao;
            pizzasalterar.tamanho = novotamanho;
            pizzasalterar.valor = novovalor;
            cardapio();
            document.getElementById("msg2").classList.remove("hidden");
            document.getElementById("msg2").innerHTML = "Pizza alterada com sucesso !!"
            setTimeout(() => {
                document.getElementById("form-alterar").classList.add("hidden")
                document.getElementById("msg2").classList.add("hidden");
            }, 3000);
        }
    } else {
        document.getElementById("msg2").innerHTML = "Preencha todos os campos, ou houve um erro tente novamente mais tarde "
        document.getElementById("msg2").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("msg2").classList.add("hidden");
        }, 3000);
    }
}
}
// Array para armazenar as vendas
let vendas = [];
// Variável para armazenar a pizza encontrada para venda
let nomevenda = null;
function buscarvenda() {
    const busca = document.getElementById("busca-venda").value.toLowerCase();
    document.getElementById("msg-venda").classList.add("hidden");
    nomevenda = pizzas.find((pizza) =>
        pizza.nomepizza.toLowerCase().includes(busca))
    if (nomevenda) {
        document.getElementById('venda-nome').value = nomevenda.nomepizza;
        document.getElementById('venda-preco').value = nomevenda.valor;
        document.getElementById("form-venda").classList.remove("hidden");
    } else {
        setTimeout(() => {
            document.getElementById("msg-venda").classList.remove("hidden");
            document.getElementById("msg-venda").innerHTML = "Pizza não encontrada"
        }, 1000);
        document.getElementById("msg-venda").classList.add("hidden");
    }
}

// Registra uma venda de pizza
function registrarvenda() {
    const nome = document.getElementById('venda-nome').value
    const preco = parseFloat(document.getElementById('venda-preco').value)
    const nomevenda = pizzas.find((pizza) => pizza.nomepizza === nome)
    const precovenda = pizzas.find(pizzavalor => pizzavalor.valor === preco)
    const comprador = document.getElementById('venda-comprador').value;

    if (nomevenda != undefined && precovenda != undefined && comprador) {
        const listavendas = document.getElementById('lista-vendas');
        const item = document.createElement('li');
        item.textContent = `Pizza: ${nome}, Preço:R$${preco}, Comprador: ${comprador}`;
        listavendas.appendChild(item);

        vendas.push({ nome, preco, comprador });

        document.getElementById('venda-nome').value = '';
        document.getElementById('venda-preco').value = '';
        document.getElementById('venda-comprador').value = ''
        setTimeout(() => {
            document.getElementById("form-venda").classList.add("hidden");
        }, 5000);

    } else {
        document.getElementById('venda-nome').value = "Pizza não encontrada, ou dados incorretos !"
        document.getElementById('venda-preco').value = ''
        document.getElementById('venda-comprador').value = ''
        setTimeout(() => {
            document.getElementById('venda-nome').value = ""
            document.getElementById('venda-preco').value = ""
        }, 3000);
    }
}

// Gera o relatório de vendas
function gerarrelatoriovendas() {
    
    const tabelarelatorio = document.getElementById('tabela-relatorio-vendas');
    tabelarelatorio.innerHTML = '' 
    if (vendas.length === 0) {
        document.getElementById("msg-relatorio").classList.remove("hidden");
        document.getElementById("msg-relatorio").innerHTML = `Não há vendas registradas`
         setTimeout(() => {
        document.getElementById("msg-relatorio").classList.add("hidden");
        }, 3000);
        return;
    }

    let totalVendas = 0;

    vendas.forEach((venda) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${venda.nome}</td>
        <td>R$${venda.preco.toFixed(2)}</td>
        <td>${venda.comprador}</td>
        `;
        tabelarelatorio.appendChild(linha);

        totalVendas += parseFloat(venda.preco);
    })
    const linhaTotal = document.createElement('tr');
    linhaTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
    <td></td>`
    tabelarelatorio.appendChild(linhaTotal)
    document.getElementById('relatorio-vendas').classList.remove('hidden')
}
