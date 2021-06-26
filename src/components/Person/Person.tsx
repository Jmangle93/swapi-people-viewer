import { stripIndex } from '../../api';

import Films from '../Films';
import Species from '../Species';
import { PersonType } from '../../types';

interface PersonProps {
  person: PersonType
}

function Person({ person }: PersonProps) {
  const films: number[] = person.films.map(film => stripIndex(film));
  const species: number = person.species.map(oneSpecies => stripIndex(oneSpecies))[0];

  return <div>
            <h2>{person.name}</h2>
            <p><strong>Appearances:</strong></p>
            <Films selection={films}/>
            <p><strong>Species:</strong></p>
            <Species selection={species}/>
          </div>;
}

export default Person
