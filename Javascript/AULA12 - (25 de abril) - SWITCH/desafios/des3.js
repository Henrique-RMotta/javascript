function calcular() {
    let geometrias = document.getElementById("geometrias").value; 
    let res = document.getElementById("res"); 
    switch (geometrias) {
        case "1":
            const pi = parseFloat(document.getElementById("pi").value);
            let raio = parseFloat(document.getElementById("raio").value);
            let areac= pi * (raio**2)
            res.innerHTML = `a área do círculo é: ${areac}`
            break;
        case "2":   
            let lado = parseFloat(document.getElementById("lado").value);
            let areaq = lado**2
            res.innerHTML = `a área do quadrado é: ${areaq}`
            break;
        case "3":
            let base = parseFloat(document.getElementById("base").value)
            let altura = parseFloat(document.getElementById("altura").value)
            let areat = (base * altura/ 2);
            res.innerHTML = `a área do triângulo é: ${areat}`
            break;
        default:
            res.innerHTML = "Nenhuma forma geométrica foi selecionada"
    }
 
}