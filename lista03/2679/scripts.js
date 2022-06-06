/**
 * 2679 - Sucessor Par
 *
 * Para se preparar para os outros problemas, vamos fazer um teste. Dado um número X,
 * retorne o menor número par maior do que X.
 *
 * Entrada: Uma linha contendo um número  0 < X < 107.
 *
 * Saída: Uma linha contendo a resposta do problema.
 *
 * Exemplos de Saída:
 * 2
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const [value] = input.split('\n').map((item) => parseFloat(item));

value % 2 === 0 ? console.log(value + 2) : console.log(value + 1);
