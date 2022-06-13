/**
 * 1036 - Fórmula de Bhaskara
 *
 * Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara.
 * Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”,
 * caso haja uma divisão por 0 ou raiz de numero negativo.
 *
 * Entrada: Leia três valores de ponto flutuante (double) A, B e C.
 *
 * Saída: Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular".
 * Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem
 * correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
 *
 * Exemplos de Saída:
 * R1 = -0.29788
 * R2 = -1.71212
 * 
 * Impossivel calcular
 * 
 * R1 = -0.02466
 * R2 = -19.68408
 * 
 * Impossivel calcular
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n').map((item) => parseFloat(item));
