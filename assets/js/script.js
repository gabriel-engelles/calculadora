// Função para limpar o display e simular o "desligamento" da calculadora
function clearDisplay(){
    document.querySelector('#display').value = ""
}

// Inicia o timeout para "desligar" a calculadora após 4 minutos
function iniciarTimeout() {
    timeout = setTimeout(clearDisplay, 240000); // 240000 milissegundos = 4 minutos
}
iniciarTimeout()

// Função chamada ao clicar em "Clear", resetando o display
let oC = document.querySelector('#OC')
oC.addEventListener('click', onClear)

function onClear() {
    let display = addNumber()
    if(display === "" || display >= 0 ){
        document.querySelector('#display').value = 0
    }
}

// Função para adicionar números ao display
function addNumber(num) {
    clearTimeout(timeout);// Mantém a calculadora "ligada"
    iniciarTimeout();
    let displayValue = document.querySelector('#display').value 
    if(displayValue == 0) { 
        document.querySelector('#display').value = num
    }else if (displayValue.length < 13){
        document.querySelector('#display').value = displayValue + num
    }
    return displayValue
}



