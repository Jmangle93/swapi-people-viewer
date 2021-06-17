import React from 'react';

import { fetchJson } from '../../api';
import { PersonType } from '../../types';
import OneSpecies from '../OneSpecies';

function Species() {
  const [species, setSpecies] = React.useState<PersonType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetchJson<{ results: PersonType[] }>('species')
      .then(speciesResponse => setSpecies(speciesResponse.results));
    setIsLoading(false);
  }, [])

  return (
    <div>
      {species.map(oneSpecies => <OneSpecies oneSpecies={oneSpecies} isLoading={isLoading}/>)}
    </div>
  )
}

export default Species