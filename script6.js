document.addEventListener('DOMContentLoaded', () => {
    const botaoGerar = document.getElementById('botaoGerar')
    const botaoVoltar = document.getElementById('botaoVoltar')

    const secaoFormulario = document.getElementById('secao-formulario')
    const secaoCurriculo = document.getElementById('secao-curriculo')


    botaoGerar.addEventListener('click', () => {
        const nome = document.getElementById('entradaNome').value
        const contato = document.getElementById('entradaContato').value
        const resumo = document.getElementById('entradaResumo').value
        const experiencia = document.getElementById('entradaExperiencia').value
        const formacao = document.getElementById('entradaFormacao').value

        if (!nome || !contato || !resumo || !experiencia || !formacao) {
            alert('Preencha todos os campos')
            return
        }

        document.getElementById('curriculoNome').textContent = nome
        document.getElementById('curriculoContato').textContent = contato
        document.getElementById('curriculoResumo').textContent = resumo
        document.getElementById('curriculoExperiencia').textContent = experiencia
        document.getElementById('curriculoFormacao').textContent = formacao


        secaoFormulario.classList.add('escondido')
        secaoCurriculo.classList.remove('escondido')

        window.scrollTo({ top: 0, behavior: 'smooth' })

        botaoVoltar.addEventListener('click', () => {
            secaoCurriculo.classList.add('escondido')
            secaoFormulario.classList.remove('escondido')
        })
    })
})