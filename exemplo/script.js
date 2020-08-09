// precisamos pegar o valor do input de ano
// precisamos pegar o elemento da resposta

var ano = document.querySelector("#ano")
var resposta = document.querySelector("#respostaAno")
var anoNascimento = 1993

// ano do input - ano que eu nasci = a minha idade

// precisamos colocar o valor do input na resposta

function cliquei() {
    // .value pra saber o valor de input
    var minhaIdade = ano.value - anoNascimento
    resposta.textContent = minhaIdade
}




/*function escreverNoConsole() {
    console.log("olá")
}*/

//escreverNoConsole()//

