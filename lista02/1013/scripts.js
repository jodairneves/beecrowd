/**
 * 1013 - O Maior
 *
 * Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido
 * da mensagem “eh o maior”. Utilize a fórmula:
 *
 * MaiorAB = (a+b+abs(a-b))/2
 *
 * Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo,
 * portanto é necessário para chegar no resultado esperado.
 *
 * Entrada: O arquivo de entrada contém três valores inteiros.
 *
 * Saída: Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
 *
 * Exemplos de Saída:
 * 106 eh o maior
 * 217 eh o maior
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const [a, b, c] = input.split(' ').map((item) => parseInt(item));

const maiorAB = (a + b + Math.abs(a - b)) / 2;
const maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maiorABC} eh o maior`);
