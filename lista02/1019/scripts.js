/**
 * 1019 - Conversão de Tempo
 *
 * Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma
 * fábrica, e informe-o expresso no formato horas:minutos:segundos.
 *
 * Entrada: O arquivo de entrada contém um valor inteiro N.
 *
 * Saída: Imprima o tempo lido no arquivo de entrada (segundos), convertido para
 * horas:minutos:segundos, conforme exemplo fornecido.
 *
 * Exemplos de Saída:
 * 0:9:16
 * 0:0:1
 * 38:55:53
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const [value] = input.split('\n').map((item) => parseInt(item));

let temp = value;

const hora = parseInt(temp / 3600);
temp %= 3600;
const minutos = parseInt(temp / 60);
temp %= 60;
const segundos = parseInt(temp / 1);



console.log(`${hora}:${minutos}:${segundos}`)
