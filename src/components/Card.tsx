import { useEffect, useState } from 'react';
import { Pokemon } from '../types/Pokemon';
import { fetchData } from '../helpers/fetchData';

type CardProps = {
  pokemonId: number;
};

export const Card = ({ pokemonId }: CardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchPokemon = async () => {
      const newPokemon: Pokemon = await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      setPokemon(newPokemon);
    };
    fetchPokemon();
  }, [pokemonId]);

  return (
    <div className='border rounded flex flex-col'>
      <p className='capitalize text-center text-2xl'>{pokemon?.name}</p>
      <img src={pokemon?.sprites.front_default} alt={`Image of ${pokemon?.name}`} />
    </div>
  );
};
