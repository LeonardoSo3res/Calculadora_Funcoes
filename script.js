// Funções matemáticas
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: divisão por zero";
    }
}

// Função para calcular com base na operação escolhida
function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;

    let resultado;

    switch (operacao) {
        case "+":
            resultado = soma(num1, num2);
            break;
        case "-":
            resultado = subtracao(num1, num2);
            break;
        case "*":
            resultado = multiplicacao(num1, num2);
            break;
        case "/":
            resultado = divisao(num1, num2);
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}