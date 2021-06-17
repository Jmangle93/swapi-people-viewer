import { stripIndex } from '../../api';

import Films from '../Films';
import { SpeciesType } from '../../types';

interface PersonProps {
  isLoading: boolean
  oneSpecies: SpeciesType
}

function Person({ oneSpecies, isLoading }: PersonProps) {
  return isLoading ? <p>Loading...</p> : 
    <div>
      <h2>{oneSpecies.name}</h2>
    </div>;
}

export default Person
