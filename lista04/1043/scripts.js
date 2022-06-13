/**
 * 1043 - Triângulo
 *
 * Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo.
 * Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:
 * 
 * Perimetro = XX.X
 * 
 * Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem
 * 
 * Area = XX.X
 *
 * Entrada: A entrada contém três valores reais.
 *
 * Saída: O resultado deve ser apresentado com uma casa decimal.
 *
 * Exemplos de Saída:
 * Area = 10.0
 * Perimetro = 12.1
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n').map((item) => parseFloat(item));
