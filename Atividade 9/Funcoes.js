
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

function ordenarNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}
 
function ehPalindromo(str) {
    const texto = str.toUpperCase();
    const reverso = texto.split('').reverse().join('');
    return texto === reverso;
}
 
function tipoTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return 'Equilátero';
        } else if (a === b || b === c || a === c) {
            return 'Isósceles';
        } else {
            return 'Escaleno';
        }
    } else {
        return 'Os valores não formam um triângulo';
    }
}
 
function mostrarMaiorNumero() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    const maior = maiorNumero(num1, num2, num3);
    alert(`Maior número: ${maior}`);
}
 
function mostrarOrdenados() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
 
    const ordenados = ordenarNumeros(num1, num2, num3);
    alert(`Números em ordem crescente: ${ordenados.join(', ')}`);
}
 
function mostrarPalindromo() {
    const texto = document.getElementById('textoPalindromo').value;
 
    const palindromo = ehPalindromo(texto);
    alert(`A palavra "${texto}" é palíndromo? ${palindromo ? "Sim" : "Não"}`);
}
 
function mostrarTipoTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
 
    const triangulo = tipoTriangulo(lado1, lado2, lado3);
    alert(`O triângulo formado é: ${triangulo}`);
}



