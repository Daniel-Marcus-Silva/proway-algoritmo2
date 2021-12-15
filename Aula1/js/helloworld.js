
let nome = "Daniel Marcus Silva" // variavel do tipo string
let idade = 43 // variavel do tipo number
let distanciaProway = 4 // variavel do tipo number

console.log("Olá meu nome é", nome, "e tenho", idade, "anos e moro a", distanciaProway, "km distancia daqui");

//let bairro=prompt("Informe o seu bairro")

//alert(bairro)

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor");
}

if (idade < 15) {
    console.log("Você é menor de 15 anos");
} else {
    console.log("Você é maior de 15 anos");
}

console.log("Escolha uma opção");
console.log("1 - primavera");
console.log("2 - verão");
console.log("3 - outono");
console.log("4 - inverno");

let opcao = 4
switch (opcao) {
    case 1:
        console.log("Você escolheu a primavera");
        break
    case 2:
        console.log("Você escolheu o verão");
        break
    case 3:
        console.log("Você escolheu o outono");
        break
    case 4:
        console.log("Você escolheu o inverno");
        break
    default:
        console.log("escolheu nada");
        break
}


let quantidade = 15

for (let contador = 1; contador <= quantidade; contador++) {
    console.log("repetindo pela", contador, "x");
}

for(let variavel=1; variavel<=5; variavel+=10){
    console.log("repetindo de novo pela",variavel,"ª x");
}

let resposta
do{
     resposta = prompt("Tinham 2 dogs, pita e repita, pita morreu quem ficou?")

}while(resposta=="repita");
