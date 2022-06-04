/**
 * 1007 - Diferença
 *
 * Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de
 * C e D segundo a fórmula: DIFERENCA = (A * B - C * D).
 *
 * Entrada: O arquivo de entrada contém 4 valores inteiros.
 *
 * Saída: Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco
 * antes e depois da igualdade.
 *
 * Exemplos de Saída:
 * DIFERENCA = -26
 * DIFERENCA = -56
 * DIFERENCA = 86
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const [a, b, c, d] = input.split('\n').map((item) => parseFloat(item));

console.log(`DIFERENCA = ${a * b - c * d}`);
