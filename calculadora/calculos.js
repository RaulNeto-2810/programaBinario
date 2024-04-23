function adicao(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}

function subtracao(a, b) {
    return (parseInt(a, 2) - parseInt(b, 2)).toString(2);
}

function multiplicacao(a, b) {
    return (parseInt(a, 2) * parseInt(b, 2)).toString(2);
}

function divisao(a, b) {
    return (parseInt(a, 2) / parseInt(b, 2)).toString(2);
}

function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.getElementById("operacao").value;
    var result;

    switch (operator) {
        case "somar":
            result = adicao(num1, num2);
            break;
        case "subtrair":
            result = subtracao(num1, num2);
            break;
        case "multiplicar":
            result = multiplicacao(num1, num2);
            break;
        case "divide":
            result = divisao(num1, num2);
            break;
        default:
            result = "Operação inválida";
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + result;
}