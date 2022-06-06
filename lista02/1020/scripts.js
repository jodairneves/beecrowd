/**
 * 1020 - Idade em Dias
 *
 * Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses
 * e dias
 *
 * Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
 * Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360,
 * 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.
 *
 * Entrada: O arquivo de entrada contém um valor inteiro.
 *
 * Saída: Imprima a saída conforme exemplo fornecido.
 *
 * Exemplos de Saída:
 * 1 ano(s)
 * 1 mes(es)
 * 5 dia(s)
 *
 * 2 ano(s)
 * 2 mes(es)
 * 10 dia(s)
 *
 * 0 ano(s)
 * 1 mes(es)
 * 0 dia(s)
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const [value] = input.split('\n').map((item) => parseInt(item));

let temp = value;

const anos = parseInt(temp / 365);
temp %= 365;
const mes = parseInt(temp / 30);
temp %= 30;
const dias = parseInt(temp / 1);


console.log(`${anos} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dias} dia(s)`);