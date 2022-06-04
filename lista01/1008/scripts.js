/**
 * 1008 - Salário
 *
 * Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por
 * hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas
 * decimais.
 *
 * Entrada: O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número,
 * quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.
 *
 * Saída: Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e
 * depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.
 *
 * Exemplos de Saída:
 * NUMBER = 25
 * SALARY = U$ 550.00
 *
 * NUMBER = 1
 * SALARY = U$ 4100.00
 *
 * NUMBER = 6
 * SALARY = U$ 2254.75
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const [employeeId, jobHours, jobHourValue] = input
  .split('\n')
  .map((item) => parseFloat(item));

console.log(
  `NUMBER = ${parseInt(employeeId)}\nSALARY = U$ ${(
    jobHours * jobHourValue
  ).toFixed(2)}`
);
