/**
 * 1035 - Teste de Seleção 1
 *
 * Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A,
 * e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável
 * A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".
 *
 * Entrada: Quatro números inteiros A, B, C e D.
 *
 * Saída: Mostre a respectiva mensagem após a validação dos valores.
 *
 * Exemplos de Saída:
 * Valores nao aceitos
 * 
 * Valores aceitos
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n').map((item) => parseFloat(item));
