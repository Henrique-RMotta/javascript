let biblioteca = [];

function adicionarlivro(){
    let titulo = prompt("Digite o título do livro ");
    let autor = prompt("DIgite o autor do livro ");
    let ano = parseInt(prompt("digite o ano de publicação do livro"));
    biblioteca.push({titulo, autor, ano});
    alert("livro adicionado com sucesso ");
}

function exibirmenu(){
    return prompt (
        "Menu: \n"+
        "1. Adicionar Livro \n"+
        "2.Buscar Livro \n"+
        "3. Listar Livros \n"+
        "4. emprestar livros \n"+
        "5. Sair \n"+
        "escolha uma opção:"
    );
}



function listarlivro(){
    if (biblioteca.length > 0){
        let mensagem = "lista de livros na biblioteca: \n";
        biblioteca.forEach((livro) =>{
            mensagem += `Titulo: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano} \n`;
         }); 
         alert(mensagem);
    } else {
        alert("a biblioteca está vazia");
    }
}

function emprestarlivro(){
    let livroemprestimo = prompt("didgite o titulo do livro que deseja emprestar");
    let autorempréstimo = prompt("digite o nome do autor");
    let dataemprestimo = parseInt(prompt("dia de hoje"));
    let mesemprestimo = parseInt(prompt("mês do emprestimo"));
    let datadevolução = dataemprestimo + 7; 
    if (datadevolução  > 30 ){
        mesemprestimo += 1;
        datadevolução = datadevolução - 30;
    }
    biblioteca.push((livroemprestimo, autorempréstimo ));
    alert(`Empréstimo de livro realizado com sucesso \n data de devolução: ${datadevolução}/${mesemprestimo} `);
}

exibirmenu();
adicionarlivro();
listarlivro();
emprestarlivro();