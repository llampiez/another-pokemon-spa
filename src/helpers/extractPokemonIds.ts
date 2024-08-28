import { Result } from '../types/Pokemons';

export const extractPokemonIds = (pokemonArray: Result[]) => {
  return pokemonArray.map(pokemon => {
    const urlParts = pokemon.url.split('/');
    return parseInt(urlParts[urlParts.length - 2], 10);
  });
};
