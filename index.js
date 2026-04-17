function percentual(aprovados, total){
  return (aprovados / total) * 100
}

const aprovados = 16
const total = 25

if (total <= 0 || aprovados > total){
  console.log('Dados inválidos')
}else {
  const resposta = percentual(aprovados, total)

  if (resposta >= 70){
    console.log('Aprovados: ${resposta}%')
  } else {
    console.log('Reprovados: ${resposta}%')
  }
}

//-------------------------------------------------------------

function calcularSaldo(podeComprar, faltaDinheiro){
  const resultado = podeComprar - faltaDinheiro
  return resultado
}

const podeComprar = 5
const faltaDinheiro = 20

if (calcularSaldo(podeComprar, faltaDinheiro) >= 1){
  console.log ('Pode ir embora')
}else {
  console.log('Vai lavar prato')
}

//----------------------------------------------------------------

function saldoDepoisDaCompra(sladoAtual, valorCompra){
  return saldoAtual - valorCompra
}

const saldoAtual = 150 
const valorCompra = 50

if(valorCompra <= 0){
  console.log('Valor inválido')
} else {
  const saldoFinal = saldoDepoisDaCompra(saldoAtual, valorCompra)

  if(saldoFinal > 0 && valorCompra <= saldoFinal){
    console.log('Pode fazer compras')
  } else {
    console.log('Falta din din')
  }
}


//------------------------------------------------------------------------

function aplicarCupom(preco,cupom){
  return preco - (preco * (cupom / 100))
}

const preco = 150
const cupom = 15

const precoFinal = aplicarCupom(preco, cupom)

//verificar se não houve desconto e retornar o valor sem desconto



if(precoFinal > 0){
  if(cupom === 0){
  console.log('O valor da conta com desconto é ${precoFinal}')
   } else {
  console.log('O valor da conta com desconto é ${precoFinal}')
   }

} else {
  console.log('Valor inválido')
}
