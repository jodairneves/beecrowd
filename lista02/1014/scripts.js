/**
 * 1014 - Consumo
 *
 * Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km)
 * e o total de combustível gasto (em litros).
 *
 * Entrada: O arquivo de entrada contém dois valores: um valor inteiro X representando a
 * distância total percorrida (em Km), e um valor real Y representando o total de combustível
 * gasto, com um dígito após o ponto decimal.
 *
 * Saída: Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula,
 * seguido da mensagem "km/l".
 *
 * Exemplos de Saída:
 * 14.286 km/l
 * 18.119 km/l
 * 9.802 km/l
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const [distancia, combustivel] = input
  .split('\n')
  .map((item) => parseFloat(item));

console.log(`${(distancia / combustivel).toFixed(3)} km/l`);
