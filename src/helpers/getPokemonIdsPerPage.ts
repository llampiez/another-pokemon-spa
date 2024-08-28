export const getPokemonIdsPerPage = (pokemonIds: number[], currentPage: number, maxLength: number) => {
  const startIndex = (currentPage - 1) * maxLength;
  const endIndex = startIndex + maxLength;
  return pokemonIds.slice(startIndex, endIndex);
};
