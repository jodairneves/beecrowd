/**
 * 1016 - Distância
 *
 * Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante
 * de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.
 *
 * Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja,
 * consegue se afastar um quilômetro a cada 2 minutos.
 *
 * Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa
 * distância do outro carro.
 *
 * Entrada: O arquivo de entrada contém um número inteiro.
 *
 * Saída: Imprima o tempo necessário seguido da mensagem "minutos".
 *
 * Exemplos de Saída:
 * 60 minutos
 * 220 minutos
 * 14 minutos
 */

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./stdin', 'utf8');

const [value] = input.split('\n').map((item) => parseInt(item));

console.log(`${(value * 2)} minutos`);
