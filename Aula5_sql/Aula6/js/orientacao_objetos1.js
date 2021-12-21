console.log("deu certo");

// aluno 
// atributos = variaveis (5)
//nota number
//nome string
//idade number
//matricula
//senha
//
//metodos = funcoes sem o comando function
//conversar(ouviu) ----> return resposta
//responderChamada(professor) ---> "professor, Meu_Nome presente"
//meApresentar() --->"Oi meu nome é NOME tenho XX anos minha matricula é XXXX"

class Aluno{
    nome
    idade 
    matricula 
    senha 
    nota  

    //declaração do construtor que será chamado de forma externa
    //para criar um Objeto da classe Aluno
    constructor(nome,idade,matricula,senha,nota){
        //passando os valores dos parametros para os meus atributos diferenciando com "This".
        this.nome=nome
        this.idade=idade
        this.matricula=matricula
        this.senha=senha
        this.nota=nota 


    }

    conversar(ouviu){
        return ouviu+"Hum que interessante..."
    }
    chamarProfessor(mensagem){
        return "Já resolveu era isso ("+mensagem+")"
    }
    meApresentar(){
        return "Olá meu nome é " +this.nome+ " tenho " +this.idade+ " anos, matricula = "
        +this.matricula+ " prefiro nao dizer minha senha "
    }

}

let nome ="Daniel"

let aluno1 = new Aluno("Daniel",43,"71393","qwert",10)

let alunoX = new Aluno("Aton",30,"tonton","atonton",10)

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.matricula);

console.log(alunoX.senha);

aluno1.nome="Chang"
console.log(aluno1);

alunoX.nome="Ben"
alunoX.idade=32
alunoX.matricula="002"
alunoX.senha="poiu"
alunoX.nota=9

console.log(alunoX);
console.log(alunoX.idade);

let colega = new Aluno("Sieger",33,"202020","zxcv",8)
console.log(colega);
colega.matricula="212121"
console.log(colega);

console.log(aluno1.conversar("sobre o filme do miranha"));

document.write(aluno1.conversar("sobre o filme do miranha"));

let resposta = aluno1.conversar("sobre o filme do miranha")

console.log(resposta);

console.log(alunoX.conversar("Nada a declara"));

//como eu crio um objeto da classe Aluno?
//instanciando um objeto da classe Aluno com os valores dos atributos passados no construtor

let aluno10 = new Aluno("Joana",29,"515151","hjhjhj",7)

//como eu acesso cada atributo do objeto? (ver no minimo 3)
console.log("Olá, meu nome é "+aluno10.nome);
document.writeln("Oi, eu tenho "+aluno10.idade+"anos")
let variavel = aluno10.matricula

//como eu atualizo o atributo de um objeto? (atualizar 3 atributos)

aluno10.idade=27
aluno10.matricula="tytyty"

console.log(aluno10);

console.log(aluno10.conversar("Aprendi orientação a objetos"));

//executando metodos de um objeto da classe Aluno


console.log(aluno10.chamarProfessor("erro na linha 64"));


console.log(aluno1.meApresentar());





