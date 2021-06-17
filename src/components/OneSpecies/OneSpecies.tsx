import { SpeciesType } from '../../types';

interface SpeciesProps {
  isLoading: boolean
  oneSpecies: SpeciesType
}

function OneSpecies({ oneSpecies, isLoading }: SpeciesProps) {
  return isLoading ? <p>Loading...</p> : <p>{oneSpecies.name}</p>;
}

export default OneSpecies
