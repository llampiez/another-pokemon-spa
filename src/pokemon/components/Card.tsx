import { usePokemon } from '../hooks/usePokemon';

type CardProps = {
  pokemonId: number;
};

export const Card = ({ pokemonId }: CardProps) => {
  const { pokemon } = usePokemon(pokemonId);

  return (
    <div className='border rounded'>
      <p>{pokemon?.name}</p>
      <img src={pokemon?.sprites.front_default} alt={`Image of ${pokemon?.name}`} />
    </div>
  );
};
