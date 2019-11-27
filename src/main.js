import POKEMON from './data/pokemon/pokemon.js'
 /* import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
//import { dataPokemon } from './main.js';

import { name, height, water, fire, flying, grass, ice, poison, psychic } from './data.js';
/*function clean(){
document.getElementById('conteiner') = 0;
}*/
function ocultar(){
 document.getElementById("welcomePage").style.display='none';
 document.getElementById("menu").style.display='block';
};

document.getElementById("acces").addEventListener('click',ocultar)


document.getElementById("names").addEventListener('click', name);
/*document.getElementById('acces').addEventListener('click', move);*/
document.getElementById('instruction').addEventListener("click", seeInstruction)
function seeInstruction()
{document.getElementById("textInstruction").innerHTML = "Hello World!";};
/*function move(){

}*/
document.getElementById('heights').addEventListener('click', height);
//.addEventListener('click', water);

let typesValue = document.getElementById('types').value;
console.log(typesValue)
localStorage.setItem("typesValue", JSON.stringify(typesValue));

document.getElementById('Water').addEventListener('click', () => {
  seePokemonWater();
})
document.getElementById('Fire').addEventListener('click', () => {
  seePokemonFire();
})
document.getElementById('Flying').addEventListener('click', () => {
  seePokemonFlying();
})
document.getElementById('Grass').addEventListener('click', () => {
  seePokemonGrass();
})

function seePokemonWater(){
//  clean();
  let waterArray = water(POKEMON);
    waterArray.map((pokemon)=> {

      let target = document.createElement("div");
      const template = `
      <span class= "name"> ${pokemon.name}</span>
      <input type=image class="img" src= "${pokemon.img}";/>
      `
      target.innerHTML = template;
      document.getElementById("conteiner").appendChild(target);
    }
  )}
  function seePokemonFire(){
  //  clean();
    let fireArray = fire(POKEMON);
      fireArray.map((pokemon)=> {

        let target = document.createElement("div");
        const template = `
        <article class="pokemon">
        <span class= "name" align="center"> ${pokemon.name}</span>
        <br>
        <input type=image class="img" src= "${pokemon.img}";/>
        </article>
        `
        target.innerHTML = template;
        document.getElementById("conteiner").appendChild(target);
      }
    )}
    function seePokemonFlying(){
      //clean();
      let flyingArray = flying(POKEMON);
        flyingArray.map((pokemon)=> {

          let target = document.createElement("div");
          const template = `
          <article class="pokemon">
          <span class= "name"> ${pokemon.name}</span>
          <input type=image class="img" src= "${pokemon.img}";/>
          </article>
          `
          target.innerHTML = template;
          document.getElementById("conteiner").appendChild(target);
        }
      )}
      function seePokemonGrass(){
      //  clean();
        let grassrArray = grass(POKEMON);
          grassrArray.map((pokemon)=> {

            let target = document.createElement("div");
            const template = `
            <span class= "name"> ${pokemon.name}</span>
            <input type=image class="img" src= "${pokemon.img}";/>
            `
            target.innerHTML = template;
            document.getElementById('conteiner').appendChild(target);
          }
        )}
  function createPokemon(){
  //  document.getElementById('conteiner') = '';
    let target = document.createElement("div");
    const template = `
    <span class= "name"> ${pokemon.name}</span>
    <input type=image class="img" src= "${pokemon.img}";/>
    `
    target.innerHTML = template;
    document.getElementById('conteiner').appendChild(target);
  }
