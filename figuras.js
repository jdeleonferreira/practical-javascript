//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del trángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es:" + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Código del Círculo]
console.group("Círculo");
const radio = 4;
console.log("El radio del círculo es: " + radio + " cm");

const diametro = radio * 2;
console.log("El PI del círculo es: " + diametro + " cm");

const PI = Math.PI;
console.log("El PI es: " + PI);

const perimetroCirculo = diametro * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

const areaCirculo = (radio * radio) * PI;
console.log("El área del círculo es: " + areaCirculo + " cm^2");

console.groupEnd();