// Exibe uma mensagem de sucesso ou erro na tela
function exibirMensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    // Adiciona a classe de estilo (sucesso ou erro)
    mensagem.className = `mensagem mensagem-${tipo}`;
    mensagem.classList.remove("hidden");

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.classList.add("hidden")
    }, 3000);
}

// Valida o login do usuário
function validarlogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Usuário e senha fixos para validação
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        exibirMensagem("Login realizado com sucesso!", "sucesso");
        setTimeout(() => {
            // Redireciona para a página principal após 1 segundo
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
    // Mostra a seção selecionada
    document.getElementById(secao).classList.remove("hidden");
}

// Cadastra uma nova pizza
function cadastrarpizza() {
    // Pega os valores dos campos do formulário
    const nomepizza = document.getElementById("nomepizza").value;
    const nomerepetido = pizzas.find((pizza) => pizza.nomepizza == nomepizza);
    const tamanho = document.getElementById("tamanho").value;
    const tamanhorepetido = pizzas.find((pizza) => pizza.tamanho == tamanho);
    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    document.getElementById("msgerro").classList.add("hidden");
    // Verifica se todos os campos foram preenchidos
    if (nomepizza && descricao && tamanho && valor) {
        // Verifica se a pizza já foi cadastrada
        if (nomerepetido!= undefined && tamanhorepetido != undefined) {
            document.getElementById("msgerro").innerHTML = `Pizza já cadastrada`
            document.getElementById("msgerro").classList.remove("hidden");
        } else {
            // Adiciona a pizza ao array
            pizzas.push({ nomepizza, descricao, tamanho, valor });
            // Limpa os campos do formulário
            document.getElementById("nomepizza").value = "";
            document.getElementById("tamanho").value = "";
            document.getElementById("valor").value = "";
            document.getElementById("descricao").value = "";
            // Atualiza o cardápio
            cardapio();
            document.getElementById("msgerro").innerHTML = `Pizza cadastrada com sucesso`
            document.getElementById("msgerro").classList.remove("hidden");
        }
    } else {
        // Exibe mensagem de erro se algum campo estiver vazio
        document.getElementById("msgerro").innerHTML = `Preencha todos os campos, ou houve um erro tente novamente mais tarde`
        document.getElementById("msgerro").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("msgerro").classList.add("hidden");
        }, 3000);
    }
}

// Busca pizzas pelo nome no cardápio
function buscarpizza() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = pizzas.filter((pizza) =>
        pizza.nomepizza.toLowerCase().includes(busca)
    );
    cardapio(resultados);
}

// Exibe o cardápio de pizzas (tabela)
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
    if (pizzasalterar) {
        // Preenche o formulário de alteração com os dados da pizza encontrada
        document.getElementById("form-alterar").classList.remove("hidden");
        document.getElementById("novo-nome").value = pizzasalterar.nomepizza;
        document.getElementById("novo-descricao").value = pizzasalterar.descricao;
        document.getElementById("novo-tamanho").value = pizzasalterar.tamanho;
        document.getElementById("novo-valor").value = pizzasalterar.valor;
    } else {
        // Exibe mensagem se não encontrar a pizza
        document.getElementById("msg").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("msg").classList.add("hidden");
        }, 3000);
        document.getElementById("msg").innerHTML = "Pizza não encontrada"
    }
}

// Altera os dados da pizza selecionada
function alterarpizza() {
    if (pizzasalterar) {
        // Pega os novos valores do formulário
        const novonome = document.getElementById("novo-nome").value;
        const nomerepetido = pizzas.find((pizza) => pizza.nomepizza == novonome);
        const novodescricao = document.getElementById("novo-descricao").value;
        const novotamanho = document.getElementById("novo-tamanho").value;
        const tamanhorepetido = pizzas.find((pizza) => pizza.tamanho == novotamanho);
        const novovalor = parseFloat(document.getElementById("novo-valor").value);
        document.getElementById("msg").classList.add("hidden");
        // Verifica se todos os campos foram preenchidos
        if (novonome && novodescricao && novotamanho && novovalor) {
            if (nomerepetido!= undefined && tamanhorepetido != undefined){
            document.getElementById("msg").classList.remove("hidden");
            document.getElementById("msg").innerHTML = "Esta pizza já existe"
            setTimeout(() => {
                document.getElementById("msg").classList.add("hidden");
            }, 3000);
            }else {
            // Atualiza os dados da pizza
            pizzasalterar.nomepizza = novonome;
            pizzasalterar.descricao = novodescricao;
            pizzasalterar.tamanho = novotamanho;
            pizzasalterar.valor = novovalor;
            // Atualiza o cardápio
            cardapio();
            document.getElementById("msg").classList.remove("hidden");
            document.getElementById("msg").innerHTML = "Pizza alterada com sucesso !!"
            setTimeout(() => {
                document.getElementById("form-alterar").classList.add("hidden")
                document.getElementById("msg").classList.add("hidden");
            }, 3000);
        }
    }
    } else {
        // Exibe mensagem de erro se algum campo estiver vazio
        document.getElementById("msg").innerHTML = "Preencha todos os campos, ou houve um erro tente novamente mais tarde "
        document.getElementById("msg").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("msg").classList.add("hidden");
        }, 3000);
    }
}

// Array para armazenar as vendas
let vendas = [];
// Variável para armazenar a pizza encontrada para venda
let nomevenda = null;

// Busca pizza para venda pelo nome
function buscarvenda() {
    const busca = document.getElementById("busca-venda").value.toLowerCase();
    document.getElementById("msg-venda").classList.add("hidden");
    nomevenda = pizzas.find((pizza) =>
        pizza.nomepizza.toLowerCase().includes(busca))
    if (nomevenda) {
        // Preenche os campos do formulário de venda
        document.getElementById('venda-nome').value = nomevenda.nomepizza;
        document.getElementById('venda-preco').value = nomevenda.valor;
        document.getElementById("form-venda").classList.remove("hidden");
    } else {
        // Exibe mensagem se não encontrar a pizza
        setTimeout(() => {
            document.getElementById("msg-venda").classList.remove("hidden");
            document.getElementById("msg-venda").innerHTML = "Pizza não encontrada"
        }, 5000);
        document.getElementById("msg-venda").classList.add("hidden");
    }
}

// Registra uma venda de pizza
function registrarvenda() {
    const nome = document.getElementById('venda-nome').value
    const preco = parseFloat(document.getElementById('venda-preco').value)
    const nomevenda = pizzas.find((pizza) =>
        pizza.nomepizza === nome)
    const precovenda = pizzas.find(pizzavalor => pizzavalor.valor === preco)
    const comprador = document.getElementById('venda-comprador').value;

    // Verifica se todos os dados estão corretos
    if (nomevenda != undefined && precovenda != undefined && comprador) {
        // Adiciona a venda à lista na tela
        const listavendas = document.getElementById('lista-vendas');
        const item = document.createElement('li');
        item.textContent = `Pizza: ${nome}, Preço:R$${preco}, Comprador: ${comprador}`;
        listavendas.appendChild(item);

        // Adiciona venda ao array de vendas
        vendas.push({ nome, preco, comprador });

        // Limpa os campos do formulário de venda
        document.getElementById('venda-nome').value = '';
        document.getElementById('venda-preco').value = '';
        document.getElementById('venda-comprador').value = ''
        setTimeout(() => {
            document.getElementById("form-venda").classList.add("hidden");
        }, 5000);

    } else {
        // Exibe mensagem de erro se algum campo estiver incorreto
        document.getElementById('venda-nome').value = "Pizza não encontrada"
        document.getElementById('venda-preco').value = 0
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
    tabelarelatorio.innerHTML = '' // Limpa a tabela

    // Verifica se há vendas registradas
    if (vendas.length === 0) {
        alert('Nenhuma venda registrada');
        return;
    }
    let totalvendas = 0;
    if (totalvendas.length === 0) {
        alert('valor de venda não registrado')
        return;
    }
    // Adiciona cada venda à tabela
    vendas.forEach((venda) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${venda.nome}</td>
        <td>R$${venda.preco.toFixed(2)}</td>
        <td>${venda.comprador}</td>
        `;
        tabelarelatorio.appendChild(linha);

        // Soma o preço total das vendas
        totalvendas += parseFloat(venda.preco);
    })
    // Adiciona uma linha para o total de vendas
    const linhaTotal = document.createElement('tr');
    linhaTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$${totalvendas.toFixed(2)}</strong></td>
    <td></td>`
    tabelarelatorio.appendChild(linhaTotal)
    // Exibe a área do relatório
    document.getElementById('relatorio-vendas').classList.remove('hidden')
}
