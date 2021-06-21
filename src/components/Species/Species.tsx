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
    let isMounted = true;
    fetchJson('species/' + selection.toString())
      .then(speciesResponse => {
        setSelected(speciesResponse);
        if (isMounted) {
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error(err);
      });
      return function cleanup() {
        console.log('Unmount species');
        isMounted = false;
      }
  }, [props.selection]);

  return (isLoading || !selected) ? <p>Loading...</p> : <p>{selected.name}</p>;
}

export default Species