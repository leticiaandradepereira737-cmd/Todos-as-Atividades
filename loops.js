const prompt = require('prompt-sync')()



//LOOPS DE REPETIÇÃO

//para      //Enquato     //incrementa +1
//for(let i = 0; i <= 5; i++){

 //   console.log(i)
//}  



//let i = 0
//enquanto
//while (i < 3){
  //  i++

  //  console.log(i, 'contagem do while')
//}




//let n = 0
//faça
//do {
 //   console.log(n, 'contagem do while')
 //   n++
    //enquanto
//} while(n < 3)

//TABUADA

//let numero = 5

//for(let i = 0; i <= 10; i++){
    //console.log(`${numero} x ${i} = ${numero * i}`)
//}

//Atividade 1 da primeira parte  10/03/26

//for(let i = 1; i <= 10; i++){

    //console.log(i)
//}  

//Atividade 2 da primeira parte

//let numero = 6 

//for(let i = 0; i <= 10; i++){
    //console.log(`${numero} x ${i} = ${numero * i}`)
//}

//Atividade 3 da primeira parte

//let soma = 0
//for(let i = 1; i <= 20; i++){
 //    if(i % 2 === 0){
 //      console.log(soma += i)
       // soma = soma + i
    // }
//}

//Atividade 4 da primeira parte 

//let linha = ""
//for(let i = 0; i < 10; i++){
  //  linha += "*"
//}
//console.log(linha)


//Ativdade 5 da primeira parte 

//for(let i = 10; i >= 1; i--){
  //  console.log(i, "Hygor faltou no dia de correção:)")
//}

//Atividade 1 da segunda parte 10/03/26

//const secreto = 8
//let chute = 2

//while(chute !== secreto){
 //   chute = Number(prompt('Adivinhe o número de 1 a 10'))
//}
 //console.log('Acertou miseravi')

//Atividade 2 da segunda parte 10/03/26

let soma = 0;
let numero = Number(prompt('Digite um número (0 para sair): '))

while (numero !== 0){
    soma += numero;
    numero = Number(prompt('Digite um número (0 para saire): '));
}

console.log('Soma total:', soma)

//Atividade 3 da segunda parte 10/03/26

let valor = 1

while (valor < 1000){
    console.log(valor)
    valor *= 2
}

//Atividade 4 da sunga parte 10/03/26

const senha = 'abc123'
let tentativa = ''

while (tentativa !== senha){
    tentativa = prompt('Digite a senha:')
}
console.log('Acesso liberado')

//Atividade 5 da segunda parte 10/06/26

let a = 0, b = 1

while (a < 100){
    console.log(a)
    const temp = a + b
    a = b
    b = temp
}


//Atvidade 1 da terceira parte 10/03/26

let opcao
do {
    opcao = Number(prompt('1 - Olá 2 - Tchau 3 - Sair'));
    if (opcao ===1)
        console.log('Olá!');
    else if (opcao === 2)
        console.log('Tchau!');
} while (opcao !== 3)

//Atividade for 1 11/03/26

//let soma = 0;

//for(let i = 1; i <= 30; i++){
 //   if(i % 2 !== 0)
 //   soma += i
//}

//console.log("A soma dos números ímpares de 1 a 30 é:", soma)

//Atividade for 2 11/03/26

//for(let i = 1; i <= 10; i++){
   // let quadrado = i * i
  //  console.log(i + "->" + quadrado)
//}

//Atividade for 3 11/03/26

//let palavra = "Computador"

//for(let i = 0; i < palavra.length; i++){
  //  console.log(palavra[i])
//}

//Atividade for 4 11/03/26

//let linha = ""
//for(let i = 0; i < 5; i++){
//    console.log(linha += "#")
//}

//Atividade for 5 11/03/26

















