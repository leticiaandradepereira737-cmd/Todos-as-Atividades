// criando o container geral
const divContainerGeral = document.createElement('div');
divContainerGeral.id = 'container-geral';

// criando container cabecalho
const divCabecalho = document.createElement('div');
divCabecalho.id = 'container-cabecalho';


// criando a logo do container cabecalho
const imgLogo = document.createElement('img')
imgLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/3840px-Logo_ORKUT.svg.png"


// criando titulo h1 do container cabecalho
const h1BoasVindas = document.createElement('h1');
h1BoasVindas.id = 'titulo'
h1BoasVindas.innerHTML = "Bem-vindo ao Orkut!"

// criando conteudo containers conteudo
const sectionConteudo = document.createElement('section');
sectionConteudo.id = 'container-conteudo'

// Criando container esquerdo dew conteudo
const divConteudoEsquerdo = document.createElement('div');
divConteudoEsquerdo.id = 'container-conteudo-esquerdo'

// Criar container item 1
const containerItem1 = document.createElement('div');
containerItem1.id = 'container-esquerdo-item-1'

const esquerdoImagemItem1 = document.createElement('img');
esquerdoImagemItem1.src = "data:image/jpeg;base64,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"
esquerdoImagemItem1.id = 'esquerdo-imagem-item-1'

// criar div texto item 1
const esquerdoContainerTextosItem1 = document.createElement('div');
esquerdoContainerTextosItem1.id = "container-textos-item -1"


// Criar h3 item 1
const esquerdoH3Item1 = document.createElement('h3');
esquerdoH3Item1.innerHTML = "Igual a vida real";

// criar tag para item 1
const esquerdoParagrafoItem1 = document.createElement('p')
esquerdoParagrafoItem1.innerHTML = "Lorem Iihihworwoirhw"

// criando container direito de conteudo
const divConteudoDireito = document.createElement('div');
divConteudoDireito.id = 'container-conteudo-direito'

const divLogin = document.createElement('div');
divLogin.id = 'container-login';

// const divContaGoogle = document.createElement('div');
// divContaGoogle.id = 'container-conta'

const h3cabecalhoLogin = document.createElement('h3');
h3cabecalhoLogin.innerHTML = "Acesse com a sua conta do Google"

// criando formulario
const form = document.createElement('form');


const divEmail = document.createElement('div');


const labelEmail = document.createElement('label');
labelEmail.innerHTML = "E-mail: "
const inputEmail = document.createElement('input');


divEmail.appendChild(labelEmail)
divEmail.appendChild(inputEmail)

const divSenha = document.createElement('div')



const labelSenha = document.createElement('label')
labelSenha.innerHTML = "Senha: "

const inputSenha = document.createElement('input');
inputSenha.type = "password";


divSenha.appendChild(labelSenha);
divSenha.appendChild(inputSenha);

const containerInputLogin = document.createElement('div')
containerInputLogin.appendChild(divEmail);
containerInputLogin.appendChild(divSenha);


const divContinuarConectado = document.createElement('div')


const checkbox = document.createElement('input');
checkbox.type = "checkbox";

const textoCheck = document.createElement('label');
textoCheck.innerHTML = "Continuar conectado";

divContinuarConectado.appendChild(checkbox);
divContinuarConectado.appendChild(textoCheck);

const botao = document.createElement('input');
botao.innerHTML = "Login";
botao.type = "submit";

const linkRecuperarConta = document.createElement('a');
linkRecuperarConta.innerHTML = "Não consegue acessar conta?";
linkRecuperarConta.href ='www.test.com';

// form.appendChild(labelEmail);
// form.appendChild(inputEmail);
form.appendChild(divEmail);
form.appendChild(divSenha);
form.appendChild(containerInputLogin);
form.appendChild(divContinuarConectado);
form.appendChild(botao);
form.appendChild(linkRecuperarConta);


// pendurando logo no container cabecalho
divCabecalho.appendChild(imgLogo);
// pendurando titulo no container cabecalho
divCabecalho.appendChild(h1BoasVindas); 

// pendurando container no container geral
divContainerGeral.appendChild(divCabecalho);

containerItem1.appendChild(esquerdoImagemItem1);
esquerdoContainerTextosItem1.appendChild(esquerdoH3Item1);
esquerdoContainerTextosItem1.appendChild(esquerdoParagrafoItem1);
containerItem1.appendChild(esquerdoContainerTextosItem1);


// pendurando container item 1 no container conteudo esquerdo
divConteudoEsquerdo.appendChild(containerItem1);

// pendurando container do conteudo esquerdo na section
sectionConteudo.appendChild(divConteudoEsquerdo);

divLogin.appendChild(h3cabecalhoLogin);
divLogin.appendChild(form);

divConteudoDireito.appendChild(divLogin);

// pendurando container do conteudo direito na section
sectionConteudo.appendChild(divConteudoDireito);

// pendurando section(container-conteudo)
divContainerGeral.appendChild(sectionConteudo);

// pendurando no body do html o container geral
document.body.appendChild(divContainerGeral);