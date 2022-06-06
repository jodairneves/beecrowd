/**
 * 1015 - Distância Entre Dois Pontos
 *
 * Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano,
 * p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a
 * vírgula, segundo a fórmula:
 *
 * Distancia = raiz( (x2-x1)2 + (y2-y1)2 )
 *
 * Entrada: O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois
 * valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante
 * x2 y2.
 *
 * Saída: Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após
 * o ponto decimal.
 *
 * Exemplos de Saída:
 * 4.4721
 * 16.1484
 * 16.4575
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');
const values = input.split('\n');

const p1 = values.shift().split(' ');
const p2 = values.shift().split(' ');

const x1 = parseFloat(p1.shift());
const y1 = parseFloat(p1.shift());

const x2 = parseFloat(p2.shift());
const y2 = parseFloat(p2.shift());

console.log(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(4));