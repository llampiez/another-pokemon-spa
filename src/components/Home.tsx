import { useEffect, useState } from 'react';
import { CardList, Search } from '.';
import { Pokemons } from '../types/Pokemons';
import { fetchData } from '../helpers/fetchData';
import { URL_POKEMON_API } from '../lib/constants';

export const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemons>();
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const changePokemonIds = (newPokemonIds: number[]) => {
    setPokemonIds(newPokemonIds);
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const newPokemons: Pokemons = await fetchData(URL_POKEMON_API);
      setPokemons(newPokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <div className='m-8'>
      <Search pokemons={pokemons} changePokemonIds={changePokemonIds} />
      <CardList pokemonIds={pokemonIds} currentPage={currentPage} />
    </div>
  );
};
