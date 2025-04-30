let temperatura = parseFloat(prompt("Digite a temperatura"));

if(temperatura>=30){
    console.log("está muito quente.");
} else if(temperatura >= 20){
    console.log("está agradável");
} else if(temperatura >=10){
    console.log("está muito frio");
} else {
    console.log("está muito frio.");
    alert(temperatura);
}