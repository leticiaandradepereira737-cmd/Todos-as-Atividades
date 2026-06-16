function mudarTexto(){
    // vai no html e pega o elemento pelo id   .inerHTML = Altere o conteúdo da tag para oq eu escrever aqui
    document.getElementById('texto').innerHTML = 'Texto novo ao clicar no botão :D'
}

function mostrarNome(){
    const nome = document.getElementById('nome').value

    document.getElementById('resultado').innerHTML = `Olá ${nome}`
}