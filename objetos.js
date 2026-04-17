const prompt = require('prompt-sync')()



//const meuCarro = {
  //  modelo: 'Toyota',
  //  cor: 'Prata',
  //  ano: 2021,
  //  classe: 'Suv',
 //   flex: 'sim',
//}

//meuCarro.sinistro = true


//console.log(meuCarro.flex)

//meuCarro.flex = true
//console.log(meuCarro.flex)
//


//spread operator
//const novoCarro = {
//    ...meuCarro,
///    modelo: 'Esportivo',
//    preco: 500.000
//}

//novoCarro


//console.log(novoCarro)



//-------------------------------------------------------------


////let aluno = {
  //  nome: 'Creusa',
 //   idade: 85,
 //   apresentar(){
  //      console.log(`Olá, sou a ${this.nome}`)
  //  }
//}

//aluno.apresentar()


//-------------------------------------------------------------

//class Aluno {
    //coonstrutor, o que precisa para essa clesse conseguir existir?
    //No exemplo, para a classe existir, precisamos do nome e da idade
  //  constructor(nome, idade){

    
        //this.nome === aluno.nome
   //     this.nome = nome
        //this.idade === aluno.idade, pega o idade que colocar no parametro
   //     this.idade = idade
 // }
//}



//class Carro {
    //constructor(marca, modelo, ano){
    //    this.marca = marca,
    //    this.modelo = modelo,
    //    this.ano = ano 
    //}


  //  apresentar(){
   //     console.log(`Sou o carro modelo ${this.modelo}`)
   // } 

   // buzina(){
   //     console.log(`O carro ${this.modelo} apertou o freio`)
  //  }

    
//}
        //new === novo, quer dizer que estamos criando uma instância
//let carro = new Carro("Toyota", "Corola", 2026)
//let carro2 = new Carro("Mercedes", "g63", 2027)

//console.log(carro)
//console.log(carro2)

//------------------------------------------------------------

// class Pessoa {
//     constructor(nome, idade){
//         this.nome = nome,
//         //pessoa.nome = nome
//         this.idade = idade        
//     }


//     apresentar(){
//     console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`)
//     }
// }    



// let Pessoa1 = new Pessoa("Letícia", "18")

// console.log(Pessoa1)

// Pessoa1.apresenrtar()

//-------------------------------------------------------------

// class Pessoa {
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade 
//     }

//     apresentar(){
//         console.log(`meu nome é ${nome}`)
//     }
// }

// class Aluno extends Pessoa{
//     constructor(nome, idade, curso){
//         super(nome, idade)

//         this.curso = curso 
//     }

//     estudar(){
//         console.log(`${this.nome} está estudando`)
//     }

// }

// class Professor extends Pessoa{
//     constructor(nome, idade, disciplina){
//         super(nome, idade)

//         this.disciplina = disciplina
//     }

//     ensinando(){
//         console.log(`${this.nome} está ensinando`)
//     }
// }

// const profNome = prompt('Digite o nome do professor: ')
// const profIdade = prompt('Digite a idade do professor: ')
// const profDisciplina = prompt('Digite a disciplina do professor: ')





// const professor1 = new Professor(profNome, profIdade, profDisciplina)
// console.log(professor1)

// const nAluno = prompt('Digite o nome do Aluno: ')
// const aIdade = prompt('Digite o Idade do Aluno: ')
// const aCurso = prompt('Digite a Disciplina do Aluno:')



// //const professor1 = new Professor('Igor', '65', 'T.I')
// //console.log(professor1)

// const aluno1 = new Aluno('Fulano', 62, 'T.I') 

// console.log(aluno1)

//-------------------------------------------------------------


//Atividade 1 18/03/26
class Pessoa3 {
    constructor(idade, nome){
    this.nome = nome
    this.idade = idade 
    }
}

class Funcionario extends Pessoa3{
    constructor(nome, idade, salario){
         super(idade, nome)


         this.salario = salario
    }
}


const pessoa = new Pessoa3 ("Letícia", 20)
console.log(pessoa)
const funcionario = new Funcionario("Igor", 29, 1500)
console.log(funcionario)

//Atividade 2 18/03/26

class Conta {
    constructor(titular, saldoInicial = 0) {
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
      } else {
        console.log("O valor do depósito deve ser positivo.");
      }
    }
  
    sacar(valor) {
      if (valor > this.saldo) {
        console.log(`Saque de R$${valor} negado. Saldo insuficiente (Disponível: R$${this.saldo}).`);
      } else if (valor <= 0) {
        console.log("O valor do saque deve ser positivo.");
      } else {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo restante: R$${this.saldo}`);
      }
    }
  }













