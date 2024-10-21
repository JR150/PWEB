function calcularIMC() {
    // Obter os valores de altura e peso
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    // Validar os dados de entrada
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Definir o resultado em uma string formatada
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Exibir o resultado em um alerta
    alert(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
}

