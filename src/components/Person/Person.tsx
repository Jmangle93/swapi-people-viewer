import { stripIndex } from '../../api';

import Films from '../Films';
import { PersonType } from '../../types';

interface PersonProps {
  isLoading: boolean
  person: PersonType
}

function Person({ person, isLoading }: PersonProps) {
  const films: number[] = person.films.map(film => stripIndex(film));
  console.log(films);
  return isLoading ? <p>Loading...</p> : 
    <div>
      <h2>{person.name}</h2>
      <Films selection={films}/>
    </div>;
}

export default Person
