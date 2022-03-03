class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  Area() {
  return this.calcularArea();
  }  
}

let objeto1 = new Retangulo(11, 10);
console.log(objeto1);
console.log("Area do 1º retangulo =  " + objeto1.calcularArea());


let objeto2 = new Retangulo(22, 10);
objeto2.calcularArea();
console.log(objeto2);
console.log("Area do 2º retangulo =  " + objeto2.Area());

