class Produto {
    constructor(nome, preco, quantidade){
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
    }



    exibirProduto(){
        console.log(`${this.nome} - R$ ${this.preco} | Estoque ${this.quantidade}`)
    }

    vender(){
        if(this.quantidade > 0){
            this.quantidade -- 
            console.log(`Unidade de ${this.nome} foi vendida`)
        } else{
            console.log(`${this.nome} está sem estoque`)
        }
    }

    repor(quantidade){
        if(quantidade > 0){
            this.quantidade += quantidade 
            console.log(`${this.quantidade} de ${this.nome} adicionadas ao estoque`)
        } else{
            console.log('Quantidade inválida')
        }
    }
}

class Bebida extends Produto {
    constructor(nome, preco, quantidade, tamanho){
        super(nome, preco, quantidade)
        this.tamanmho = tamanho
    }

    exibirProduto(){
        console.log(`${this.nome} - R$ ${this.preco} Tamanho - ${this.tamanho} | Estoque ${this.quantidade}`)
    }
}

class Comida extends Produto{
    constructor(nome, preco, quantidade, tipo){
        super(nome, preco, quantidade)
        this.tipo = tipo
    }

    exibirProduto(){
        console.log(`${this.nome} - R$ ${this.preco} ${this.tipo} | Estoque ${this.quantidade}`)
    }
}

class Pedido{
    constructor(cliente){
        this.cliente = cliente
        this.itens = []
    }

    adicionarItem(produto){
       if (produto.quantidade > 0){
        this.itens.push(produto)
        console.log(`${produto.nome} foi adicionado ao pedido, Em estoque: ${produto.quantidade} `)
       } else {
        console.log(`${produto.nome} está sem estoque`)
       }
    }

    verPedidos(){
        console.log(`${this.itens}`) //REMOVER PARA TIRAR O OBJECT DO CONSOLE

        if(this.itens.length === 0){
            console.log('Pedido sem produtos')
        }

        //for each quer dizer PARA CADA
        this.itens.forEach((item, index) => {
            console.log(`${index + 1}, ${item.nome}, R$ ${item.preco}`)

            //[bolo, suco, pão]
        })
    }

    calcularTotal(){
        let total = 0

        this.itens.forEach(item => {
            total += item.preco
        });

        return total
    }

    fecharPedido(){
        this.verPedidos()
        console.log(`Total a pagar ${this.calcularTotal()}`)
    }

    removerUltimoItem(){
        if (this.itens.length > 0 ){
             let removido = this.itens.pop()
           
            console.log(`${removido.nome} foi retirado do pedido`)
        } else{
            console.log('Pedido vazio.')
        }

        
    }

    contarItens(){
        return console.log(`Quantidade de itens no pedido: ${this.itens.length}`)
    }

}


class Cafeteria {
    constructor(nome){
        this.nome = nome 
        this.cardapio = []
    }

    adicionarProduto(produto){
        this.cardapio.push(produto)

        console.log(`${produto.nome} foi adicionado ao pedido`)
    }

    listarCardapio(){
        console.log(`\n --- CARDAPIO DA CAFETERIA ${this.nome} ---`)

        if (this.cardapio.length === 0 ) {
            console.log('Nenhum produto no cardápio')

            return
        }
        for (let i = 0 ; i < this.cardapio.length; i++) {
            let produto = this.cardapio[i]
            console.log((i + 1) + '.' + produto.nome + ' - R$ ' + produto.preco + 'Estoque: ' + produto.quantidade)
        }
    }

    buscarProduto(nome){
        return this.cardapio.find(produto => produto.nome === nome)
    }

    mostrarDisponoveis(){
        console.log('--- PRODSUTOS DESPONIOVEIS ---')

        this.cardapio.forEach(function (produto) {
            if(produto.quantidade > 0){
                console.log(`${produto.nome} R$ ${produto.preco}`)
            }
        })
    }
}


//criar cafeteria
// const cafeteria = new Cafeteria('Cafezão')



// //criando bebidas
// const cafeExpresso = new Bebida('Cafezinho', 5, 10, 'Pequeno')
// const capuccino = new Bebida('Capuccino', 10, 1, 'Grande')

// // criando comidas
// const paoQue = new Comida('Pão de queijo', 10, 5, 'Salgado')
// const croissant = new Comida('Croissant', 25, 2, 'Salgado')
// const torta = new Comida('Torta de morango', 15, 2, 'Doce')

// // console.log(cafeteria)
// // console.log(cafeExpresso)
// // console.log(capuccino)

// cafeteria.adicionarProduto(cafeExpresso)
// cafeteria.adicionarProduto(capuccino)
// cafeteria.adicionarProduto(paoQue)
// cafeteria.adicionarProduto(croissant)
// cafeteria.adicionarProduto(torta)

// cafeteria.listarCardapio()

// // Teste vendas
// console.log('--- TESTE DE VENDAS ---')

// cafeExpresso.vender()
// capuccino.vender()
// // paoQue.vender()
// // paoQue.vender()
// // paoQue.vender()
// // paoQue.vender()
// // paoQue.vender()
// // paoQue.vender()
// // paoQue.exibirProduto()

// console.log('--- REPONDO PÃO DE QUEIJO ---')
// paoQue.repor(1)

// paoQue.exibirProduto()

// console.log('--- CRIANDO PEDIDO ---')

// const pedido1 = new Pedido('Igor')

// pedido1.adicionarItem(cafeExpresso)
// pedido1.adicionarItem(paoQue)

// cafeteria.mostrarDisponoveis()

// pedido1.contarItens()

// pedido1.removerUltimoItem


// pedido1.fecharPedido()

//Listar cardapio novamente 
// cafeteria.listarCardapio()

// const produtoEncontrado = cafeteria.buscarProduto('Pão de Queijo') //True ou false

// if(produtoEncontrado){
//     console.log('Produto foi encontrado')
// } else {
//     console.log('O produto não foi encontrado')
// }

















const Cafeteria =  new Cafeteria('KoadakDoces')

const cafeteria = new Doces






























