// Função para limpar o display e simular o "desligamento" da calculadora
function clearDisplay(){
    document.querySelector('#display').value = ""
}

// Inicia o timeout para "desligar" a calculadora após 4 minutos
function iniciarTimeout() {
    timeout = setTimeout(clearDisplay, 240000); // 240000 milissegundos = 4 minutos
}
iniciarTimeout()

let oC = document.querySelector('#OC')
oC.addEventListener('click', onClear)
// Função chamada ao clicar em "Clear", resetando o display
function onClear() {
    let display = addNumero()
    if(display === "" || display >= 0 || display.indexOf(".") !== -1){
        document.querySelector('#display').value = 0
        operador = ""
        valorAnterior = undefined
        resultado = undefined
        valorAtual = undefined
    }
}

// Função para adicionar números ao display
function addNumero(num) {
    clearTimeout(timeout);// Mantém a calculadora "ligada"
    iniciarTimeout();
    let displayValue = document.querySelector('#display').value
    
    if(num == "." && displayValue.includes(".")){
        return
    }

    if(displayValue == 0) { 
        document.querySelector('#display').value = num
    }else if (displayValue.length < 13){
        document.querySelector('#display').value = displayValue + num
    }
    return displayValue
}

let valorAnterior
let operador 
let valorAtual
let resultado

// Função para adicionar/alterar operador aritmético, adicionar valor ou zerar variaveis
function opAritmetico(op) {
    if(valorAnterior === undefined){
        valorAnterior = Number(document.querySelector('#display').value)
        console.log("anterior: " + valorAnterior)
    } else {
        resultado = Number(document.querySelector('#display').value)
        valorAtual = undefined
        console.log("anterior(resultado): " + resultado)
    }
    operador = op
    document.querySelector('#display').value = ""
}

// Função para calcular valores
function calcular() {
    if(valorAnterior === undefined) {
        return
    } else if(valorAtual === undefined) {
        valorAtual = Number(document.querySelector('#display').value)
    }

    
    switch (operador) {
        case "+":
            resultado = (resultado === undefined) ? (isNaN(valorAnterior) ? 0 : valorAnterior) + valorAtual : Number(resultado) + valorAtual
            break;
        case "-":
            resultado = (resultado === undefined) ? (isNaN(valorAnterior) ? 0 : valorAnterior) - valorAtual : Number(resultado) - valorAtual
            break;
        case "*":
            resultado = (resultado === undefined) ? (isNaN(valorAnterior) ? 0 : valorAnterior) * valorAtual : Number(resultado) * valorAtual
            break;
        case "/":
            resultado = (resultado === undefined) ? (isNaN(valorAnterior) ? 0 : valorAnterior) / valorAtual : Number(resultado) / valorAtual
            break;
    
        default:
            break;
    }

    
    resultado = resultado.toString()

    if (resultado.length > 13) {
        resultado = resultado.slice(0, 13)
    }
    
    if (resultado.includes(".")) {
        console.log(resultado)
        resultado = parseFloat(resultado).toFixed(2)
        console.log(resultado)
    }
    document.querySelector('#display').value = resultado
}











