import POKEMON from './data/pokemon/pokemon.js'
console.log(POKEMON)
 /* import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
//import { dataPokemon } from './main.js';

import { name } from './data.js';
import {height} from './data.js';
import { grass } from './data.js';
//export const dataPokemon = POKEMON;
//console.log(dataPokemon)
 /* console.log(LoL);
 * console.log(POTTER)
*/

function ocultar(){
 document.getElementById("welcomePage").style.display='none'; 
 document.getElementById("menu").style.display='block'; 
};

document.getElementById("acces").addEventListener('click',ocultar)
 

document.getElementById("names").addEventListener('click', name);
//document.getElementById('acces').addEventListener('click', move);
document.getElementById('instruction').addEventListener("click", seeInstruction)
function seeInstruction()
{document.getElementById("textInstruction").innerHTML = "Hello World!";};
function move(){

}
document.getElementById("heights").addEventListener('click', height);
document.getElementById("grass").addEventListener('click', () => {
    console.log(grass(POKEMON))
    
});
