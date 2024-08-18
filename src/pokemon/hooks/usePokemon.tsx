import { useEffect, useState } from 'react';
import { Pokemon } from '../types';
import { fetchPokemon } from '../helpers/fetchPokemon';

export const usePokemon = (pokemonId: number) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async () => {
    const newPokemon = await fetchPokemon(pokemonId);
    setPokemon(newPokemon);
  };

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    pokemon,
  };
};
