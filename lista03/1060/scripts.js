/**
 * 1060 - Números Positivos
 *
 * Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos
 * (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.
 *
 * Entrada: Seis valores, negativos e/ou positivos.
 *
 * Saída: Imprima uma mensagem dizendo quantos valores positivos foram lidos.
 *
 * Exemplos de Saída:
 * 4 valores positivos
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const value = input.split('\n').map((item) => parseFloat(item));

let count = 0;
for (let i = 0; i < value.length; i++) {
  if (value[i] > 0) {
    count++;
  }
}
console.log(`${count} valores positivos`);
