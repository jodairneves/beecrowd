/**
 * 1018 - Cédulas
 *
 * Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual
 * o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1.
 * A seguir mostre o valor lido e a relação de notas necessárias.
 *
 * Entrada: O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).
 *
 * Saída: Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo
 * necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada
 * linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
 *
 * Exemplos de Saída:
 * 576
 * 5 nota(s) de R$ 100,00
 * 1 nota(s) de R$ 50,00
 * 1 nota(s) de R$ 20,00
 * 0 nota(s) de R$ 10,00
 * 1 nota(s) de R$ 5,00
 * 0 nota(s) de R$ 2,00
 * 1 nota(s) de R$ 1,00
 *
 * 11257
 * 112 nota(s) de R$ 100,00
 * 1 nota(s) de R$ 50,00
 * 0 nota(s) de R$ 20,00
 * 0 nota(s) de R$ 10,00
 * 1 nota(s) de R$ 5,00
 * 1 nota(s) de R$ 2,00
 * 0 nota(s) de R$ 1,00
 *
 * 503
 * 5 nota(s) de R$ 100,00
 * 0 nota(s) de R$ 50,00
 * 0 nota(s) de R$ 20,00
 * 0 nota(s) de R$ 10,00
 * 0 nota(s) de R$ 5,00
 * 1 nota(s) de R$ 2,00
 * 1 nota(s) de R$ 1,00
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const [value] = input.split('\n').map((item) => parseInt(item));


const cem = (value - (value % 100)) / 100;
let troco = value - (cem * 100);
const cinquenta = (troco - (troco % 50)) / 50;
troco = troco - (cinquenta * 50);
const vinte = (troco - (troco % 20)) / 20;
troco = troco - (vinte * 20);
const dez = (troco - (troco % 10)) / 10;
troco = troco - (dez * 10);
const cinco = (troco - (troco % 5)) / 5;
troco = troco - (cinco * 5);
const dois = (troco - (troco % 2)) / 2;
troco = troco - (dois * 2);
const um = (troco - (troco % 1)) / 1;
troco = troco - (um * 1);


console.log(value);
console.log(`${cem} nota(s) de R$ 100,00`);
console.log(`${cinquenta} nota(s) de R$ 50,00`);
console.log(`${vinte} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinco} nota(s) de R$ 5,00`);
console.log(`${dois} nota(s) de R$ 2,00`);
console.log(`${um} nota(s) de R$ 1,00`);
