/**
 * 1059 - Números Pares
 *
 * Faça um programa que mostre os números pares entre 1 e 100, inclusive.
 *
 * Entrada: Neste problema extremamente simples de repetição não há entrada.
 *
 * Saída: Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.
 *
 * Exemplos de Saída:
 * 2
 * 4
 * 6
 * ...
 * 100
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//const input = require('fs').readFileSync('./stdin', 'utf8');

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
