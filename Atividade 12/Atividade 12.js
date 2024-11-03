function Retangulo(x, y) {
    this.base = x;
    this.altura = y;
  
    this.calcularArea = function() {
      return this.base * this.altura;
    };
  }
  
  const retangulo = new Retangulo(5, 10);  // Exemplo com base 5 e altura 10
  
  console.log("Área do Retângulo:", retangulo.calcularArea());  // Saída: Área do Retângulo: 50
  