import { useEffect, useState } from 'react';
import { Card } from './Card';
import { getPokemonIdsPerPage } from '../helpers/getPokemonIdsPerPage';
import { MAX_NUMBER_OF_POKEMON_CARDS } from '../lib/constants';

type CardListProps = {
  pokemonIds: number[] | undefined;
  currentPage: number;
};

export const CardList = ({ pokemonIds, currentPage }: CardListProps) => {
  const [pokemonIdsPerPage, setPokemonIdsPerPage] = useState<number[]>([]);

  useEffect(() => {
    if (pokemonIds) {
      //TODO: Eliminar el uso del efecto en este componente.
      const newPokemonIdsPerPage = getPokemonIdsPerPage(pokemonIds, currentPage, MAX_NUMBER_OF_POKEMON_CARDS);
      setPokemonIdsPerPage(newPokemonIdsPerPage);
    }
  }, [pokemonIds, currentPage]);

  return (
    <div className='grid grid-cols-5 gap-4'>
      {pokemonIdsPerPage.map(pokemonId => (
        <Card key={pokemonId} pokemonId={pokemonId} />
      ))}
    </div>
  );
};
