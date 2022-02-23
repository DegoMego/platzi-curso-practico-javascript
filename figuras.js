// Codigo del cuadrado
console.group("Cuadradinho");

// const ladoCuadrado=5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado +"cm");

function perimetroCuadrado(lado){
    return lado*4;
}
// console.log("El perímetro del cuadrado es: "+ perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado*lado;
}

// console.log("El área del cuadrado es: "+ areaCuadrado +"cm2");

console.groupEnd();

// Código del tríangulo
console.group("triangulinho");

const ladoTriangulo_1=6;
const ladoTriangulo_2=6;
const BaseTriangulo=4;

// console.log("Los lados del triangulo miden: "+ ladoTriangulo_1 + "cm, " + ladoTriangulo_2 + "cm y "+ BaseTriangulo + "cm");
function perimetroTriangulo(lado1,lado2, base){
    return lado1+lado2+base;
}


const altoTriangulo=5.5;
// console.log("El Alto del triángulo es: "+ altoTriangulo +"cm");

// const perimetroTriangulo=ladoTriangulo_1 + ladoTriangulo_2 + BaseTriangulo;
// console.log("El perímetro del triángulo es: "+ perimetroCuadrado +"cm");

// const areaTriangulo=(BaseTriangulo*altoTriangulo)/2;
// console.log("El área del triángulo es: "+ areaTriangulo +"cm2");
function areaTriangulo(base, alto){
    return (base*alto)/2;
}

console.groupEnd();

// Código del Círculo
console.group("Circulo");

// const radioCirculo=6;
// console.log("El radio del circulo es: "+ radioCirculo +"cm");

// const diametroCirculo= radioCirculo*2;
// console.log("El díametro del circulo es: "+ diametroCirculo +"cm");
function diametroCirculo(radio){
    return radio*2;
}

const PI=Math.PI;

// const perimetroCirculo=diametroCirculo * PI;
// console.log("El perimetro del circulo es: "+ perimetroCirculo +"cm");
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*PI;
}

// const areaCirculo= (radioCirculo*radioCirculo)*PI;
// console.log("El radio del circulo es: "+ areaCirculo +"cm2");
function areaCirculo(radio){
    return (radio*radio)*PI;
}

console.groupEnd();