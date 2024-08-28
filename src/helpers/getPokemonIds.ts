import { Result } from '../types/Pokemons';
import { extractPokemonIds } from './extractPokemonIds';

export const getPokemonIds = (pokemonResults: Result[], searchInput: string) => {
  if (!searchInput) return extractPokemonIds(pokemonResults);
  const filteredPokemonResults = pokemonResults.filter(pokemonResult =>
    pokemonResult.name.toLowerCase().startsWith(searchInput.toLowerCase()),
  );
  return extractPokemonIds(filteredPokemonResults);
};
