import pokemons from './data/pokemon/pokemon.js';
import { order, types } from './data.js';
//import { log } from 'util';

search.addEventListener('keyup', filterNames(pokemons, search));
console.log(filterNames);

document.querySelector('#order').addEventListener('click', order(pokemons));

let search = document.querySelector('#search');


function filterNames(pokemons, search) {
    let texto = search.value.toLowerCase();
    for (let pokemon in pokemons) {
        let names = pokemon.name;
        let minus = names.toLowerCase();
        if (minus.indexOf(texto) !== -1) {
            showPokemon.innerHTML = "";
            let target = document.createElement('div');
            const template = `
    <div class='cart'>
    <span class= "name">${pokemon.name}</span>
    <br>
    <img class='img' src= "${pokemon.img}";/>
    <div class="hidden">
    <p> Id: ${pokemon.id} </p>
    <br>
    <p> Typo: ${pokemon.type} </p>
    <br>
    <p> Debilidades: ${pokemon.weaknesses} </p>
    <br>
    <p> Dulces para evolucionar: ${pokemon.candy_count} </p>
    <br>
    <p> Height: ${pokemon.height} </p>
    </div>
    </div>
    `
            target.innerHTML += template;
            document.getElementById('showPokemon').appendChild(target);
        } else if (texto == minus) {
            showPokemon.innerHTML +=
                `
  <h1> No se encontró este Pokemon </h1>
  `
        }
    }
};
//--- Funcion para ocultar la pagina de Bienvenida--- //
document.getElementById("acces").addEventListener('click', () => {
    document.getElementById("welcomePage").style.display = 'none';
    document.getElementById("menu").style.display = 'block';
});


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

function seePokemon(value) {
    document.getElementById('showPokemon').innerHTML = '';
    let array = types(pokemons, value);
    array.map((pokemon) => {
        let target = document.createElement('div');
        const template = `
  <div class='cart'>
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
  </div>
  `
        target.innerHTML += template;
        document.getElementById('showPokemon').appendChild(target);
    })
    let filterByTypes = types(pokemons);
    document.querySelectorAll('.cart').forEach((img, i) => {
        img.addEventListener('click', (e) => {
            document.querySelectorAll('.hidden')[i].style.display = 'block';
            console.log(e.target)
        });
    })
}