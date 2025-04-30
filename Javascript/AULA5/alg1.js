//laços de repetição

//for
//for (condição){
// bloco de código
//}

for (let i = 15 ; i< 20 ; i++){ // (cria a variavel; se isso tiver acontecendo ; faz isso)
    console.log(i);
}

for(let i=20; i>=10; i--){
    console.log(i);
}

for(let i = 0 ; i>=-100; i-=10 ) {
    console.log(i);
}

//While
// while(condição) {
//bloco de código
//}

let i = 9;
while(i< 10){
    console.log(i);
    i++;
}

let j= 0; 
while(j<100){
    console.log(j);
    j= j + 10;
}

// do while
// do {
//bloco de código
//} while (condição);
let k = 5;
do{
    console.log(k);
    k++;
}while (k<10);

let g= 15;
do while(g<25){
    console.log(g);
    g++;
} while(g<15);

let l = 0;
do{
    console.log(l);
    l +=10;
}while(l <= 100);

//solução do eduardo
let edu1= 1 ;
let edu2 = 10;
do{
    console.log(edu1,edu2);
    edu1++;
    edu2++;
}while(edu1<=2 && edu2 <=12);

//break
for(let i = 0; i < 10 ; i = i + 1){
    if(i === 5){
        break;
    }
    console.log(i);
}

//continue 
for (let i = 0; i<=10 ; i++){
    if(i===5) {
        continue;
    }
    console.log(i);
}