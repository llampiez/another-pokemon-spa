import { Pokemon } from '../types';

export const fetchPokemon = async (pokemonId: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const response = await fetch(url);
  const data: Pokemon = await response.json();

  return data;
};
