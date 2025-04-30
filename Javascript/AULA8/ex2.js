function media (){
    let nome = window.prompt('qual é o nome do aluno')
    let n1 = Number(window.prompt(`Qual foi a primeira nota ${nome}`))
    let n2 = Number(window.prompt(`Àlém de ${n1}, qual foi  a outra nota de ${nome}?`))
    med = (n1 + n2)/2

    let msg // cria variavel e deixa ela vazia
    if (med >= 6){ // se por acaso a media for 6 ou mais
        msg = 'meus parábens!'
    } else { // senâo
        msg = 'estude um pouco mais'
    }

    let res = document.getElementById('situation')
    res.innerHTML = `<p>Calculando a media final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark> ${n1} e ${n2} </mark>. </p>`
    res.innerHTML +=  `<p> A media final  será <mark> ${med} </mark>.</p>`
    res.innerHTML += `<p> A mensagem que temos é: <strong style= 'color:blue;' > ${msg}</strong></p>` 
}