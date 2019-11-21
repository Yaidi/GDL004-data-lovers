import POKEMON from './data/pokemon/pokemon.js'
 /* import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import { name } from './data.js';
import {height} from './data.js';
import { grass } from './data.js';
export const dataPokemon = POKEMON;
 /* console.log(LoL);
 * console.log(POTTER)
*/
document.getElementById("names").addEventListener('click', name);
document.getElementById('acces').addEventListener('click', move);
document.getElementById('instruction').addEventListener("click", seeInstruction)
function seeInstruction()
{document.getElementById("textInstruction").innerHTML = "Hello World!";};
function move(){

}
document.getElementById("heights").addEventListener('click', height);
document.getElementById("grass").addEventListener('click', grass);
