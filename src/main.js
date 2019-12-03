import POKEMON from './data/pokemon/pokemon.js'

import { name, types} from './data.js';

//--- Funcion para ocultar la pagina de Bienvenida--- //

function ocultar(){
 document.getElementById("welcomePage").style.display='none';
 document.getElementById("menu").style.display='block';
};

document.getElementById("acces").addEventListener('click',ocultar);


document.getElementById('instruction').addEventListener('click', () => {
  document.getElementById('textInstruction').style.display = 'block';
});

document.getElementById('Water').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Fire').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})

document.getElementById('Flying').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Grass').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Poison').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Ground').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Rock').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Electric').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Bug').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Normal').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Fighting').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Ghost').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
document.getElementById('Dragon').addEventListener('click', (e) => {
  seePokemon(e.target.value);
})
function seePokemon(value){
document.getElementById('conteiner').innerHTML= "";
let array = types(POKEMON, value);
array.map((pokemon) =>{
  let target = document.createElement("div");
  const template = `
  <span class= "name">${pokemon.name}</span>
  <br>
  <img class='img' src= "${pokemon.img}";/>
  <div class="hidden">
  <p> Id: ${pokemon.id} </p>
  <br>
  <p> Type: ${pokemon.type} </p>
  <br>
  <p> Debilidades: ${pokemon.weaknesses} </p>
  <br>
  <p> Dulces para evolucionar: ${pokemon.candy_count} </p>
  <br>
  <p> Height: ${pokemon.height} </p>
  </div>
  `
  target.innerHTML = template;
  document.getElementById('conteiner').appendChild(target);
  })
  let filterByTypes = types(POKEMON);
  document.querySelectorAll('.img').forEach((img, i) => {
    img.addEventListener('click', (e) => {
      document.querySelectorAll('.hidden')[i].style.display = 'block';
    console.log(e.target)
  });
})
}
