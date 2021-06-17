import React from 'react';

import { fetchJson } from '../../api';
import { SpeciesType } from '../../types';
import OneSpecies from '../OneSpecies';

interface Props {
    selection: number[]
}

function Species(props: Props) {
  // This could be silently failing with a default case of human (1). Should look to test edge cases and fix brittle index splice in api/. 
  const selection: number[] = !(props.selection.length === 0) ? props.selection : [1];

  const [selected, setSelected] = React.useState<SpeciesType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetchJson<{ results: SpeciesType[] }>('species')
      .then(speciesResponse => {
          let selectedSpecies: SpeciesType[] = [];
          selection.forEach(choice => {
            selectedSpecies.push(speciesResponse.results[choice-1])
          });
          setSelected(selectedSpecies);
        });
    setIsLoading(false);
  }, []);

  return (
    <div>
      {selected.map(oneSpecies => <OneSpecies oneSpecies={oneSpecies} isLoading={isLoading}/>)}
    </div>
  )
}

export default Species