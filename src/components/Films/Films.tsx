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
  const aborter = new AbortController();

  React.useEffect(() => {
    fetchJson<{ results: FilmType[] }>('films')
      .then(filmResponse => {
        let selectedFilms: FilmType[] = [];
        props.selection.forEach(choice => {
        selectedFilms.push(filmResponse.results[choice-1])
        });
        setSelected(selectedFilms);
        setIsLoading(false);
    })
    .catch(err => {
      console.error(err);
    })

    return function cleanup() {
      aborter.abort();
    }
  }, [props.selection])

  return isLoading ? <p>Loading films...</p> : (<div>{selected.map(film => <Film film={film} isLoading={isLoading}/>)}</div>);
}

export default Films