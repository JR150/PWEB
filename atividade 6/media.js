
function calcularMedia() {
    let nome = prompt("Digite o nome do aluno:");
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nota4 = parseFloat(prompt("Digite a quarta nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert("Por favor, insira apenas valores numéricos.");
        return;
    }

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2));
}
