/**
 * 1065 - Pares entre Cinco Números
 *
 * Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados
 * são pares e mostre esta informação.
 *
 * Entrada: O arquivo de entrada contém 5 valores inteiros quaisquer.
 *
 * Saída: Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
 *
 * Exemplos de Saída:
 * 3 valores pares
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const value = input.split('\n').map((item) => parseFloat(item));

let count = 0;
for (let i = 0; i < value.length; i++) {
  if (value[i] % 2 === 0) {
    count++;
  }
}
console.log(`${count} valores pares`);
