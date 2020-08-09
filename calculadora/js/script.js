var ganhoMes = document.querySelector("#ganho-mes")
var horasTrabalhadas = document.querySelector("#horas-dia")
var resposta = document.querySelector("#resposta")
var diasMes = 22


function calcularValorHora() {
    var valorHora = parseFloat(ganhoMes.value / (horasTrabalhadas.value * diasMes))
    resposta.textContent = "R$ " + valorHora.toFixed(2)
}

