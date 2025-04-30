let nome = [];
let notag = [];
function nota() {
    let nomedoaluno = prompt("Digite o nome de seu aluno.")
    let resultados = document.getElementById("resultados");
    resultados.innerHTML = `<button onclick="nota1()">Adicionar a primeira nota</button>`
    nome.push({nomedoaluno});
}
function nota1() {
    let notap = parseFloat(prompt("Digite a primeira nota de seu aluno."));
    let resultados = document.getElementById("resultados");
    notag.push(notap);
    resultados.innerHTML = `<br><button onclick="nota2()">Adicionar a segunda nota</button>`
}
function nota2() {
    let notap = parseFloat(prompt("Digite a segunda nota de seu aluno."));
    let resultados = document.getElementById("resultados");
    notag.push(notap);
    resultados.innerHTML = `<br><button onclick="nota3()">Adicionar a terceira nota</button>`
}
function nota3() {
    let notap = parseFloat(prompt("Digite a terceira nota de seu aluno."));
    let resultados = document.getElementById("resultados");
    notag.push(notap);
    resultados.innerHTML = `<br><button onclick="nota4()">Adicionar a nota do trabalho</button>`
}
function nota4() {
    let notap = parseFloat(prompt("Digite a nota de trabalho de seu aluno."));
    let resultados = document.getElementById("resultados");
    notag.push(notap);
    resultados.innerHTML = `<br><button onclick="nota5()">Verificar</button>`
}
function nota5() {
    let notatotal = (notag[0] + notag[1] + notag[2] + notag[3]) / 4
    let resultados = document.getElementById("resultados");
    nome.forEach((v) => {
        if (notatotal >= 6) {
            resultados.innerHTML = `Olá ${v.nomedoaluno}, você foi aprovado com uma média ${notatotal.toFixed(2)}`
        } else {
            resultados.innerHTML = `Olá ${v.nomedoaluno}, você foi reprovado com uma média ${notatotal.toFixed(2)}`
        }
    })
}