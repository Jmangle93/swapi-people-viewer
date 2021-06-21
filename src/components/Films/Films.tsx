import React from 'react'

import { fetchJson } from '../../api'
import { FilmType } from '../../types'
import Film from './Film/Film';

interface Props {
    selection: number[];
}

// To Do: Refactor Films to not worry about selection, merely return full results of /films
// Refactor Film to receive one selection 1-6 and return only that Film.
function Films(props: Props) {
  const [selected, setSelected] = React.useState<FilmType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    let isMounted = true;
    fetchJson<{ results: FilmType[] }>('films')
      .then(filmResponse => {
        let selectedFilms: FilmType[] = [];
        props.selection.forEach(choice => {
        selectedFilms.push(filmResponse.results[choice-1])
        });
        setSelected(selectedFilms);
        if (isMounted) {
          setIsLoading(false);
        }
    })
    .catch(err => {
      console.error(err);
    })

    return function cleanup() {
      console.log('Unmount films');
      isMounted = false;
    }
  }, [props.selection])

  return isLoading ? <p>Loading...</p> : (<div>{selected.map(film => <Film film={film} isLoading={isLoading}/>)}</div>);
}

export default Films