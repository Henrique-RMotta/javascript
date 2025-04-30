function calcidade(){
    let agora = new Date();
    let ano = agora.getFullYear();

    let nasc = Number(window.prompt("em que ano você nasceu"))
    let idade = ano - nasc;

    let saida = document.getElementById("idade");
    saida.innerHTML = `<p>Quem nasceu em ${nasc} vai compeltar <strong> ${idade} </strong> anos em ${ano}. <p/>`
}