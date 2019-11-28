import POKEMON from './data/pokemon/pokemon.js'
 /* import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
//import { dataPokemon } from './main.js';

import { name, height, water, fire, flying, grass, poison, ground, rock, electric, bug, normal, fighting, ghost, dragon, } from './data.js';

//export const data = POKEMON;
//console.log(dataPokemon)
 /* console.log(LoL);
 * console.log(POTTER)
*/
//--- Funcion para ocultar la pagina de Bienvenida--- //
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
console.log(typesValue);
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
document.getElementById('Poison').addEventListener('click', () => {
  seePokemonPoison();
})
document.getElementById('Ground').addEventListener('click', () => {
  seePokemonGround();
})
document.getElementById('Rock').addEventListener('click', () => {
  seePokemonRock();
})
document.getElementById('Electric').addEventListener('click', () => {
  seePokemonElectric();
})
document.getElementById('Bug').addEventListener('click', () => {
  seePokemonBug();
})
document.getElementById('Normal').addEventListener('click', () => {
  seePokemonNormal();
})
document.getElementById('Fighting').addEventListener('click', () => {
  seePokemonFighting();
})
document.getElementById('Ghost').addEventListener('click', () => {
  seePokemonGhost();
})
document.getElementById('Dragon').addEventListener('click', () => {
  seePokemonDragon();
})

function seePokemonWater(){
  document.getElementById('conteiner').innerHTML= '';
  let waterArray = water(POKEMON);
    waterArray.map((pokemon)=> {

      let target = document.createElement("div");
      const template = `
      <span class= "name"> ${pokemon.name}</span>
      <br>
      <input type=image class="img" src= "${pokemon.img}";/>
      `
      target.innerHTML = template;
      document.getElementById("conteiner").appendChild(target);
    }
  )}
  function seePokemonFire(){
    document.getElementById('conteiner').innerHTML= '';
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
      document.getElementById('conteiner').innerHTML= '';
      let flyingArray = flying(POKEMON);
        flyingArray.map((pokemon)=> {

          let target = document.createElement("div");
          const template = `
          <article class="pokemon">
          <span class= "name"> ${pokemon.name}</span>
          <br>
          <input type=image class="img" src= "${pokemon.img}";/>
          </article>
          `
          target.innerHTML = template;
          document.getElementById("conteiner").appendChild(target);
        }
      )}
      function seePokemonGrass(){
        document.getElementById('conteiner').innerHTML= '';
        let grassrArray = grass(POKEMON);
          grassrArray.map((pokemon)=> {

            let target = document.createElement("div");
            const template = `
            <article class='pokemon'>
            <span class= 'name'> ${pokemon.name}</span>
            <br>
            <input type=image class="img" src= "${pokemon.img}";/>
            </article>
            `
            target.innerHTML = template;
            document.getElementById('conteiner').appendChild(target);
          }
        )}
        function seePokemonPoison(){
          document.getElementById('conteiner').innerHTML= '';
          let poisonArray = poison(POKEMON);
          poisonArray.map((pokemon)=> {

              let target = document.createElement("div");
              const template = `
              <span class= "name"> ${pokemon.name}</span>
              <input type=image class="img" src= "${pokemon.img}";/>
              `
              target.innerHTML = template;
              document.getElementById("conteiner").appendChild(target);
            }
          )}
          function seePokemonGround(){
            document.getElementById('conteiner').innerHTML= '';
            let groundArray = ground(POKEMON);
              groundArray.map((pokemon)=> {

                let target = document.createElement("div");
                const template = `
                <span class= "name"> ${pokemon.name}</span>
                <input type=image class="img" src= "${pokemon.img}";/>
                `
                target.innerHTML = template;
                document.getElementById("conteiner").appendChild(target);
              }
            )}
            function seePokemonRock(){
              document.getElementById('conteiner').innerHTML= '';
              let rockArray = rock(POKEMON);
                rockArray.map((pokemon)=> {

                  let target = document.createElement("div");
                  const template = `
                  <span class= "name"> ${pokemon.name}</span>
                  <input type=image class="img" src= "${pokemon.img}";/>
                  `
                  target.innerHTML = template;
                  document.getElementById("conteiner").appendChild(target);
                }
              )}
              function seePokemonElectric(){
                document.getElementById('conteiner').innerHTML= '';
                let electricArray = electric(POKEMON);
                  electricArray.map((pokemon)=> {

                    let target = document.createElement("div");
                    const template = `
                    <span class= "name"> ${pokemon.name}</span>
                    <input type=image class="img" src= "${pokemon.img}";/>
                    `
                    target.innerHTML = template;
                    document.getElementById("conteiner").appendChild(target);
                  }
                )}
                function seePokemonBug(){
                  document.getElementById('conteiner').innerHTML= '';
                  let bugArray = bug(POKEMON);
                    bugArray.map((pokemon)=> {

                      let target = document.createElement("div");
                      const template = `
                      <div class='pokemon'>
                      <br>
                      <span class= "name"> ${pokemon.name}</span>
                      <input type=image class="img" src= "${pokemon.img}";/>
                      </div>
                      `
                      target.innerHTML = template;
                      document.getElementById("conteiner").appendChild(target);
                    }
                  )}
                  function seePokemonNormal(){
                    document.getElementById('conteiner').innerHTML= '';
                    let normalArray = normal(POKEMON);
                      normalArray.map((pokemon)=> {

                        let target = document.createElement("div");
                        const template = `
                        <div class='pokemon'>
                        <br>
                        <span class= "name"> ${pokemon.name}</span>
                        <input type=image class="img" src= "${pokemon.img}";/>
                        </div>
                        `
                        target.innerHTML = template;
                        document.getElementById("conteiner").appendChild(target);
                      }
                    )}
                    function seePokemonFighting(){
                      document.getElementById('conteiner').innerHTML= '';
                      let fightingArray = fighting(POKEMON);
                        fightingArray.map((pokemon)=> {

                          let target = document.createElement("div");
                          const template = `
                          <article class='pokemon'>
                          <span class= "name"> ${pokemon.name}</span>
                          <input type=image class="img" src= "${pokemon.img}";/>
                          </article>
                          `
                          target.innerHTML = template;
                          document.getElementById("conteiner").appendChild(target);
                        }
                      )}
                      function seePokemonGhost(){
                        document.getElementById('conteiner').innerHTML= '';
                        let ghostArray = ghost(POKEMON);
                          ghostArray.map((pokemon)=> {

                            let target = document.createElement("div");
                            const template = `
                            <span class= "name"> ${pokemon.name}</span>
                            <input type=image class="img" src= "${pokemon.img}";/>
                            `
                            target.innerHTML = template;
                            document.getElementById("conteiner").appendChild(target);
                          }
                        )}
                        function seePokemonDragon(){
                          document.getElementById('conteiner').innerHTML= '';
                          let dragonArray = dragon(POKEMON);
                            dragonArray.map((pokemon)=> {

                              let target = document.createElement("div");
                              const template = `
                              <span class= "name" style="color:#FF0000;"> ${pokemon.name}</span>
                              <br>
                              <input type=image class="img" src= "${pokemon.img}";/>
                              `
                              target.innerHTML = template;
                              document.getElementById("conteiner").appendChild(target);
                            }
                          )}



  function createPokemon(){
  document.getElementById('conteiner').innerHTML= "";
  let array = name(POKEMON);
  array.map((pokemon) =>{
    let target = document.createElement("div");
    const template = `
    <span class= "name"> ${pokemon.name}</span>
    <input type=image class="img" src= "${pokemon.img}";/>
    `
    target.innerHTML = template;
    document.getElementById('conteiner').appendChild(target);
  })
