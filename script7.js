//COLOCA 9O ELEMENTOs NUMA VARIÁVEL
const inputNome = document.getElementById('inputNome');
const inputValor = document.getElementById('inputValor');
const inputEstoque = document.getElementById('inputEstoque');
const inputFoto = document.getElementById('inputFoto');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const produto = document.getElementById('produtos');

// PEGA O BOTÃO E ESPERA O USUÁRIO CLICAR
botaoAdicionar.addEventListener('click', () => {
   

  const linkFoto = inputFoto.value;

  if (linkFoto !== '') {

   const  newProduto = document.createElement('div');
   newProduto.classList.add('produtos');

   const  newProdutos = document.createElement('div');
   newProduto.classList.add('card-conteudo');



   const newImagem = document.createElement('img');
   const newProduto1 = document.createElement('h2');
   const newProduto2 = document.createElement('p');
   const newProduto3 = document.createElement('p');

   newImagem.src = linkFoto;

   newProduto.appendChild(newImagem);

   
   

   newProduto1.innerHTML = produto.value;
   newProdutos.appendChild(newProduto1);

   newProduto2.innerHTML = inputValor.value;
   newProdutos.appendChild(newProduto2);

   newProduto3.innerHTML = inputEstoque.value;
   newProdutos.appendChild(newProduto3);

   newProduto.appendChild(newProdutos);
   produto.appendChild(newProduto);
   


   inputFoto.value = '';

  }

});
































































































if (nome === ''|| valor === '' || estoque === '' || foto === '') {
   alert('Preencha todos os campos!')
   return
  }