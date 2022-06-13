/**
 * 1038 - Lanche
 *
 * Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item.
 * A seguir, calcule e mostre o valor da conta a pagar.
 * 
 * CODIGO    ESPECIFICAÇÃO    PREÇO
 *   1       Cachorro Quente  R$ 4.00
 *   2       X-Salada         R$ 4.50
 *   3       X-Bacon          R$ 5.00
 *   4       Torrada Simples  R$ 2.00
 *   5       Refrigerante     R$ 1.50
 *
 * Entrada: O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade
 * de um item conforme tabela acima.
 *
 * Saída: O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago,
 * com 2 casas após o ponto decimal.
 *
 * Exemplos de Saída:
 * Total: R$ 10.00
 * Total: R$ 6.00
 * Total: R$ 13.50
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n').map((item) => parseFloat(item));