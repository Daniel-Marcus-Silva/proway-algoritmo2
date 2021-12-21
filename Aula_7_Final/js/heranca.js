
class Pessoa{
    //esses atributos não precisam mais ser declarados em cada classe que herde de Pessoa
    nome
    idade
    altura
    salario
    //basta repassar os parametros que vem no New para o construtor da Super Classe

    constructor(nome,idade,altura,salario){
        this.nome=nome
        this.idade=idade
        this.altura=altura
        this.salario=salario
    }
}
//o comando extends + nome da classe, garante a herança de atributos e metodos da Super Classe

class Diretor extends Pessoa{
    //esse atributo só existe na classe Diretor
    //não preciso informar nome e idade aqui novamente
          qtdProfessores

          //o construtor tem o objetivo de preencher os valores antes de gerar um objeto do tipo Diretor
          //por isso preciso informar nome e idade no New porém devo repassar esses valores para o contrutor
          //da super classe ou Classe Pai
          constructor(nome,idade,qtdProfessores){
              super(nome,idade)
              this.qtdProfessores=qtdProfessores
              //os atributos herdados repasso para o construtor da Super Classe
              
          }
}


class Aluno extends Pessoa{
    //atributos da classe Aluno
    nome
    idade
    matricula
//Construtor utilizado no new que recebe os parametros para inicializar
//os atributos no novo objeto do tipo Aluno
    constructor(nome,idade,matricula){
        //para cada parametro inicializo respectivamente o atributo do objeto
        //o "this" é utilizado para identificar que o atributo é do objeto
        //isso ajuda a não confundir parametro com atributo
        super(nome,idade)
        this.matricula=matricula

    }

    meApresentar(){
        return "Olá meu nome " +this.nome+ " tenho " +this.idade+ " anos e minha matricula é " +this.matricula
    }
}


//professor
//nome,idade,qtdAlunos
//meApresentar

class Professor extends Pessoa{
    qtdAlunos

    constructor(nome,idade,qtdAlunos,altura,salario){
        //o super deve ser chamado primeiro para garantir que a Super Classe faça o seu construtor primeiro
        super(nome,idade,altura,salario)
        this.qtdAlunos=qtdAlunos
        //depois inicializo meus atributos especificos da classe Professor
        
    }

    meApresentar(){
        return "Boa noite, me chamo " +this.nome+ " tenho "+this.idade+" anos e tenho " +this.qntdAlunos+ " alunos"
    }
}

    let prof1= new Professor("Xavier",48,15,1.8,0)
    console.log(prof1);
    console.log(prof1.nome);
    console.log(prof1.idade);
    console.log(prof1.qtdAlunos);

    let paulo = new Diretor("Paulo Y Kano",80,30)
paulo.altura=1.5
paulo.salario=25000
console.log(paulo);

    
