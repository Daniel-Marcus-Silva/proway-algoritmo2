console.log("deu certo");

meApresentar() // chamada de função

let nome = capturaTexto("informe seu nome") //usando a função captura texto passando o parametro "frase"
let idade = capturaNumeroEspecial ("Informe sua idade")
let anoAtual = capturaNumeroEspecial ("Informe o ano atual")
let cidade = capturaTexto("Informe sua cidade")

console.log("Meu nome é "+nome+" idade é "+idade+" estamos no ano de "+ anoAtual+ "estou em "+cidade);

console.log("quero saber o retorno dessa função "+retorneInteiro());

//declaração da função
//tem palavra reservada function
//()gaveta de parametros
//{}escopo tudo que será executado
//conteudo que eu quero executar

function meApresentar(){
    let nome="daniel"
    let idade=43
    
    console.log("Oi meu nome é "+nome+" tenho " +idade);

}

function retornoSimples(){
    return "ta aqui oq vc precisa"
}

function retorneInteiro(){
    return 10
}
//quando eu chamo essa função devo informar um valor para esse parametro
function capturaTexto(texto){
    let temporario = prompt(texto)
    return temporario 
}
//nao preciso passar parametros pois não tem
function capturaNumero() {
    let temporario = Number(prompt("Informe um numero")) 
    return temporario
}
//essa função recebe parametro onde a função capturaNumero nao recebia
//dessa forma a função se torna dinamica pois é parametrizavel
function capturaNumeroEspecial (frase){
    let temporario= Number(prompt(frase))
}