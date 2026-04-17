//Atividade 1

let compras = ["pao", "leite", "cafe", "acucar"]

if (compras.includes("cafe")){
    const indice = compras.indexOf("cafe")
    compras.splice(indice, 1)
}  else {
    console.log("Nao tem cafe")
}

console.log(compras)

//Atividade 2

let estoque = ["arroz", "feijao", "carne"]
if (!estoque.includes("sal")) {
 estoque.push("sal")
}
console.log(estoque)

//Atividade 3

let fila = ["ana", "bruno", "carla"]
let chegou = "vip"
if (chegou === "vip") {
 fila.unshift(chegou)
}
const atendido = fila.shift()
console.log(atendido)
console.log(fila)

//Atividade 4

let produtos = ["mouse", "teclado", "monitor"]
if (produtos.includes("monitor")) {
 const indice = produtos.indexOf("monitor")
 produtos.splice(indice, 1, "monitor gamer")
}
console.log(produtos)

//Atividade 5


let carrinho = ["camisa", "calca", "tenis"]

carrinho.push("bone")

if (carrinho.length > 3) {
    carrinho.pop()
}

console.log(carrinho)

//Atividade 6 

let nomes = ["carlos", "ana", "bruno"]

if (nomes.length >= 3) {
    nomes.sort()
}

console.log(nomes) 

//Atividade 7

let logs = ["ok", "ok", "erro"]
if (logs[logs.length - 1] === "erro") {
 logs.pop()
}
console.log(logs)

//Atividade 8

let alunos = ["ana", "pedro", "marina"]
let notas = [7, 6, 8]
const indice = alunos.indexOf("pedro")
if (indice !== -1) {
 notas[indice] = notas[indice] + 1
}
console.log(alunos)
console.log(notas)

//Atividade 9

let tarefas = ["lavar louca", "estudar", "treinar"]
if (tarefas.includes("estudar")) {
 const indice = tarefas.indexOf("estudar")
 tarefas.splice(indice, 1)
} else {
 tarefas.push("estudar")
}
console.log(tarefas)

//Atividade 10

let itens = ["chocolate", "refrigerante", "banana", "agua"]
if (itens.includes("refrigerante")) {
 const indice = itens.indexOf("refrigerante")
 itens.splice(indice, 1)
}
itens.sort()
console.log(itens)


