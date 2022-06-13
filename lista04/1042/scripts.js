/**
 * 1042 - Sort Simples
 *
 * Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente,
 * uma linha em branco e em seguida, os valores na sequência como foram lidos.
 *
 * Entrada: A entrada contem três números inteiros.
 *
 * Saída: Imprima a saída conforme foi especificado.
 *
 * Exemplos de Saída:
 * -14
 * 7
 * 21
 * 
 * 7
 * 21
 * -14
 * 
 * 
 * -14
 * 7
 * 21
 * 
 * -14
 * 21
 * 7
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n').map((item) => parseFloat(item));