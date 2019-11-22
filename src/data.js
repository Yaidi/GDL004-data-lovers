

/* Manejo de data */

// esta es una función de ejemplo
//import { dataPokemon } from './main.js';
//import pokemon from './data/pokemon/pokemon.js';
export const name = () => {
//  for(let i=0; i < dataPokemon.name.length; i++){
  /*let getNames = dataPokemon.map(function(x){
    return x.name*/
  let names = dataPokemon.filter(dataPokemon => dataPokemon.name = dataPokemon.name);
    console.log(names);
    createPokemon()
};
export const height = () => {
  let heights = dataPokemon.filter(dataPokemon => dataPokemon.height = dataPokemon.height);
  console.log(heights);
};

export const grass = (data) => {
  return data.filter((pokemon) => {
    return pokemon.type[0] === 'Grass' || pokemon.type[1] === 'Grass'
  })
}
  //console.log(grass(), 'grass')
  /*grass.map((pokemon)=> {
    let target = Document.createElement("span");
    const template = `
    <div class = "name"> ${pokemon.name}</div>
    <img class = "img" src = "${pokemon.image}"/>`
    target.innerHTML=template;
    document.getElementById("y").appendChild(target); 

  })
console.log(grass);*/


/*export const grass = () => {
  let grasses = dataPokemon.filter(dataPokemon => dataPokemon.type.map(function(element){
  if(element === "Grass"){
  return dataPokemon;}
})
  === "Grass"); 

console.log(grass);
};*/

function createPokemon(){


};
