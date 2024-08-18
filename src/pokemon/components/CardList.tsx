import { Card } from './Card';

const MAXIMUM_NUMBER_OF_CARD = 20;

export const CardList = () => {
  const pokemonIdList = Array.from({ length: MAXIMUM_NUMBER_OF_CARD }, (_, i) => i + 1);
  return (
    <div className='grid grid-cols-4 gap-4'>
      {pokemonIdList.map(pokemonId => (
        <Card key={pokemonId} pokemonId={pokemonId} />
      ))}
    </div>
  );
};
