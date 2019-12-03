export const name = (data) => {
 data.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  };

export const types = (Pokemon, value) => {
  return Pokemon.filter((pokemon) => {
    return pokemon.type[0] === (value) || pokemon.type[1] === (value);
  })
};
