class Livros {
    constructor(titulo, autor, disponivel) {
        this.titulo = titulo, 
        this.autor = autor
        this.disponivel = true 
    }
}

class Biblioteca {
    constructor(){
        this.itens = []
    }

    adicionarLivro(livros) {
        this.itens.push(livros)
    

    }

    listarLivros() {
     this.itens.forEach(livros => {
        const status = livros.disponivel? 
        "Disponível": "Emprestado"
        console.log(`${livros.titulo} - ${livros.autor} (${status})`)
     })
    }

    emprestarLivro(titulo) { 
        let livros = this.livros.find(l => l.titulo === titulo)

        if (!livros) {
            console.log("Livro emprestado com sucesso")
        }else {
            console.log("Livro indisponível")
        }
    }

    devolverLivro(titulo) {
        let livro = this.livros.find(l => l.titulo === titulo)

        if (livro) {
            itens.disponivel = true
            console.log("Livro devolvido com sucesso")
        }
    }

    contarDisponiveis() {
        let count = 0 

        this.itens.forEach(livro => {
            if (livro.disponivel) {
                count++
            }
        })

        return count
    }
}

//Testando o sistema 


let livro1 = new Livros("Dom Casmurro", "Machado de Assis")
let livro2 = new Livros("1984", "George Orwell")
let livro3 = new Livros("O Hobbit", "J.R.R Tolkien")

let biblioteca = new Biblioteca()

biblioteca.adicionarLivro(livro1)
biblioteca.adicionarLivro(livro2)
biblioteca.adicionarLivro(livro3)

console.log("Lista de livros:")
biblioteca.listarLivros()

console.log("\nEmprestando livro...")
biblioteca.emprestadoItens("1984")

console.log("\nLista atualizada:")
biblioteca.listarLivros()

console.log("\nDevolvendo livro...")
biblioteca.devolverLivro("1984")

console.log("\nLista final:")
biblioteca.listarLivros()

console.log("\nDisponível:", biblioteca.contarDisponiveis())

