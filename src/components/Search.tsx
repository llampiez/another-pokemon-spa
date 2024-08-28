import { useEffect, useState } from 'react';
import { getPokemonIds } from '../helpers/getPokemonIds';
import { Pokemons } from '../types/Pokemons';

type SearchProps = {
  pokemons: Pokemons | undefined;
  changePokemonIds: (newPokemonIds: number[]) => void;
};

export const Search = ({ pokemons, changePokemonIds }: SearchProps) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (pokemons) {
      //TODO: Eliminar el uso del efecto en este componente.
      const newPokemonIds = getPokemonIds(pokemons.results, searchInput);
      changePokemonIds(newPokemonIds);
    }
  }, [pokemons, searchInput]);

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value);
  };

  return (
    <div className='grid justify-items-center'>
      <input
        onChange={handleInputChange}
        type='text'
        placeholder='Find a Pokémon'
        className='border rounded-lg m-4 w-96'
      />
    </div>
  );
};
