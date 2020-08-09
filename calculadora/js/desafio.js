var valorHora = document.querySelector("#valor-hora")
var horasProjeto = document.querySelector("#horas-projeto")
var resposta = document.querySelector("#resposta")

function calcular() {
    var valorProjeto = parseFloat(valorHora.value * horasProjeto.value)
    resposta.textContent = "R$ " + valorProjeto.toFixed(2)
}