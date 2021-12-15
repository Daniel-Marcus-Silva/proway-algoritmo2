/*

Solicite uma quantidade definida de numeros a serem capturados
para cada captura deve verificar qual o maior numero e o menor numero

apos a captura dos numeros exibir o maior o menor e a media geral desses numeros


*/

let qtdNumeros = Number(prompt("Informe quantos numeros serao capturados"))
let menor
let maior
let media 
let soma

for(let contador=1;contador<=qtdNumeros;contador++){
    let numero =Number(prompt("Informe o"+contador+"ª numero"))
    if (contador == 1){
        menor = numero 
        maior = numero
    }else{
        if(numero<menor){
            if(numero>maior){
                maior=numero
            }
        }
    }
}

