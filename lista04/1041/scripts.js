/**
 * 1041 - Coordenadas de um Ponto
 *
 * Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano.
 * A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou
 * na origem (x = y = 0).
 * 
 *           Y
 *       Q2  |  Q1
 *       --------X 
 *       Q3  |  Q4
 * 
 * 
 * Se o ponto estiver na origem, escreva a mensagem “Origem”.
 * 
 * Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.
 *
 * Entrada: A entrada contem as coordenadas de um ponto.
 *
 * Saída: A saída deve apresentar o quadrante em que o ponto se encontra.
 *
 * Exemplos de Saída:
 * Q4
 * Q1
 * Origem
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n').map((item) => parseFloat(item));