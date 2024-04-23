function convercao() {
    var inputNumber = document.getElementById("inputNumero").value;
    var inputBase = document.getElementById("inputBase").value;
    var result = {};

    switch (inputBase) {
        case "hex":
            result = {
                dec: parseInt(inputNumber, 16),
                oct: parseInt(inputNumber, 16).toString(8),
                bin: parseInt(inputNumber, 16).toString(2)
            };
            break;
        case "dec":
            result = {
                hex: parseInt(inputNumber, 10).toString(16).toUpperCase(),
                oct: parseInt(inputNumber, 10).toString(8),
                bin: parseInt(inputNumber, 10).toString(2)
            };
            break;
        case "oct":
            result = {
                hex: parseInt(inputNumber, 8).toString(16).toUpperCase(),
                dec: parseInt(inputNumber, 8),
                bin: parseInt(inputNumber, 8).toString(2)
            };
            break;
        case "bin":
            result = {
                hex: parseInt(inputNumber, 2).toString(16).toUpperCase(),
                dec: parseInt(inputNumber, 2),
                oct: parseInt(inputNumber, 2).toString(8)
            };
            break;
    }

    var output = "<p>Resultados:</p>";
    for (var base in result) {
        if (base !== inputBase) {
            output += `<p>${base.charAt(0).toUpperCase() + base.slice(1)}: ${result[base]}</p>`;
        }
    }

    document.getElementById("resultado").innerHTML = output;
}