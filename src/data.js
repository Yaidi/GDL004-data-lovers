//import { data } from './main.js';
export const name = (data) => {
  let names = data.filter(pokemon => data.name = data.name);
  return names
    createPokemon()
};
export const height = (data) => {
  let heights = data.filter(pokemon => data.height = data.height);
  return heights
  createPokemon()
};

//let value= JSON.parse(localStorage.getItem("typesValue"));

export const water = (data) => {
  return data.filter((pokemon) => {
    return pokemon.type[0] === 'Water' || pokemon.type[1] === 'Water';
  })
}
export const fire = (data) => {
  return data.filter((pokemon) => {
    return pokemon.type[0] === 'Fire' || pokemon.type[1] === 'Fire';
  })
}
export const flying = (data) => {
  return data.filter((pokemon) => {
    return pokemon.type[0] === 'Flying' || pokemon.type[1] === 'Flying';
  })
}
export const grass = (data) => {
  return data.filter((pokemon) => {
    return pokemon.type[0] === 'Grass' || pokemon.type[1] === 'Grass';
  })
}
export const ice = (data) => {
  return data.filter((pokemon) => {
    return pokemon.type[0] === 'Ice' || pokemon.type[1] === 'Ice';
  })
}
export const poison = (data) => {
  return data.filter((pokemon) => {
    return pokemon.type[0] === 'Poison' || pokemon.type[1] === 'Poison';
  })
}
export const psychic = (data) => {
  return data.filter((pokemon) => {
    return pokemon.type[0] === 'Psychic' || pokemon.type[1] === 'Psychic';
  })
}
