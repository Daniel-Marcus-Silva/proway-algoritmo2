//criar uma classe professor com os atributos
// nome string
//idade number
//qtdAlunos number


//metodos 
//fazerChamada que recebe por parametro o nome do aluno e retorna (presença verificada)
//calculaMedia recebe 3 notas e devolve a media

//apos criar a classe instanciar 1 objeto da classe Professor para atribuir os valores
//atualizar algum valor de atributo do professor
//utilizar os metodos do professor

class Professor {
    nome
    idade
    qntAlunos


    constructor(nome, idade, qntAlunos) {
        this.nome = nome
        this.idade = idade
        this.qntAlunos = qntAlunos


    }

    fazerChamada(nomeAluno) {
        return "Presente " +nomeAluno+" marcado na lista"
    }

    calculaMedia(nota1,nota2,nota3) {
        return (nota1 + nota2 + nota3) / 3

    }
}

let professor1 = new Professor ("Zezinho",40,30)
professor1.qtdAlunos=29

console.log(professor1.fazerChamada("ciclano"));

let media = professor1.calculaMedia(6,7,9)

console.log(media);

// instanciem outro professor e utilizem seus atributos e metodos
// ler valores separadamente
//atualizar valores e ver o antes e depois
//fazer mais de uma chamada
//calcular mais de uma media

let professor2 = new Professor ("Pedro",35,25)

console.log(professor2.nome);
professor2.nome="André"


console.log(professor2.fazerChamada("José"));
console.log(professor2.fazerChamada("Maria"));

console.log(professor2.calculaMedia(7,7,7));




