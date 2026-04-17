class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome,
        this.preco = preco
      this.quantidade = quantidade
    }
  }
  
  class Carrinho {
    constructor() {
      this.itens = []
    }
  
    adicionarProduto(produto) {
      this.itens.push(produto)
    }
  
    removerUltimoItem() {
      this.itens.pop()
    }
    contarItens() {
      return this.itens.length
    }
  
    calcularTotal() {
      let total = 0
      this.itens.forEach(p => {
        total += p.preco
      })
      return total
    }
  
    listaProdutos() {
      this.itens.forEach(p => {
        console.log(`${p.nome} - R$ ${p.preco}`)
      })
    }
  
    removerPorNome(nome) {
      this.itens = this.itens.filter(p => p.nome !== nome)
    }
  }
  
  class Mercado {
    constructor() {
      this.produtos = []
    }
  
    adicionarProduto(produto) {
      this.produtos.push(produto)
    }
  
    mostrarDisponiveis() {
      this.produtos.forEach(p => {
        console.log(`${p.nome}  - RS$ ${p.preco}  (Estoque: ${p.quantidade})`)
      })
    }
  
  }
  
  
  let p1 = new Produto('Arroz', 20, 10)
  let p2 = new Produto('Feijão', 20, 10)
  
  
  let m = new Mercado()
  
  m.adicionarProduto(p1)
  m.adicionarProduto(p2)
  
  console.log('produtos disponíveis')
  m.mostrarDisponiveis()
  
  let carrinho = new Carrinho
  
  carrinho.adicionarProduto(p1)
  
  console.log('itens no carrinho')
  
  carrinho.listaProdutos()
  
  console.log(`Total: ${carrinho.calcularTotal}`)
  
  
  console.log(`Quantidade de itens no carrinho ${carrinho.contarItens}`)