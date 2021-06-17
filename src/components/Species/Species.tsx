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
    const selection = props.selection ? props.selection : 1;
    fetchJson('species/' + selection.toString())
      .then(speciesResponse => {
        setSelected(speciesResponse);
      });
    setIsLoading(false);
  }, [props.selection]);

  return (isLoading || !selected) ? <p>Loading...</p> : <p>{selected.name}</p>;
}

export default Species