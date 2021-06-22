import React from 'react';

import { fetchJson } from '../../api';
import { SpeciesType } from '../../types';

interface Props {
    isLoading: boolean
    selection: number
}

function Species(props: Props) {
  const [selected, setSelected] = React.useState<SpeciesType>();
  const [isLoading, setIsLoading] = React.useState<boolean>(props.isLoading);

  React.useEffect(() => {
    const aborter = new AbortController();
    const selection = props.selection ? props.selection : 1;
    fetchJson('species/' + selection.toString())
      .then(speciesResponse => {
        setSelected(speciesResponse);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
      return function cleanup() {
        aborter.abort();
      }
  }, [props.selection]);

  return (isLoading || !selected) ? <p>Loading species...</p> : <p>{selected.name}</p>;
}

export default Species