/**
 * 1012 - Área
 *
 * Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C.
 * Em seguida, calcule e mostre:
 * a) a área do triângulo retângulo que tem A por base e C por altura.
 * b) a área do círculo de raio C. (pi = 3.14159)
 * c) a área do trapézio que tem A e B por bases e C por altura.
 * d) a área do quadrado que tem lado B.
 * e) a área do retângulo que tem lados A e B.
 *
 * Entrada: O arquivo de entrada contém três valores com um dígito após o ponto decimal.
 *
 * Saída: O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das
 * áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos
 * e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
 *
 * Exemplos de Saída:
 * TRIANGULO: 7.800
 * CIRCULO: 84.949
 * TRAPEZIO: 18.200
 * QUADRADO: 16.000
 * RETANGULO: 12.000
 *
 * TRIANGULO: 96.520
 * CIRCULO: 725.833
 * TRAPEZIO: 175.560
 * QUADRADO: 108.160
 * RETANGULO: 132.080
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');
const PI = 3.14159;

const [a, b, c] = input.split(' ').map((item) => parseFloat(item));

const triangulo = parseFloat((a * c) / 2);
const circulo = parseFloat(PI * Math.pow(parseFloat(c), 2));
const trapezio = parseFloat(((a + b) * c) / 2);
const quadrado = parseFloat(Math.pow(parseFloat(b), 2));
const retangulo = parseFloat(a * b);

console.log(`TRIANGULO = ${triangulo.toFixed(3)}`);
console.log(`CIRCULO = ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO = ${trapezio.toFixed(3)}`);
console.log(`QUADRADO = ${quadrado.toFixed(3)}`);
console.log(`RETANGULO = ${retangulo.toFixed(3)}`);
