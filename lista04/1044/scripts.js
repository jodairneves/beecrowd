/**
 * 1044 - Múltiplos
 *
 * Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou
 * "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
 *
 * Entrada: A entrada contém valores inteiros.
 *
 * Saída: A saída deve conter uma das mensagens conforme descrito acima.
 *
 * Exemplos de Saída:
 * Sao Multiplos
 * Nao sao Multiplos
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n').map((item) => parseFloat(item));