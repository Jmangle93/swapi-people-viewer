import React from 'react'

import { fetchJson } from '../../api'
import { FilmType } from '../../types'
import Film from './Film/Film';

interface Props {
    selection: number[];
}

function Films(props: Props) {
  const selection: number[] = props ? props.selection : [1, 2, 3, 4, 5, 6];
  const [selected, setSelected] = React.useState<FilmType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetchJson<{ results: FilmType[] }>('films')
      .then(filmResponse => {
        let selectedFilms: FilmType[] = [];
        selection.forEach(choice => {
        selectedFilms.push(filmResponse.results[choice-1])
        });
        setSelected(selectedFilms);
        setIsLoading(false);
    })
  }, [])

  return isLoading ? <p>Loading...</p> : (
    <div>
      {selected.map(film => <Film film={film} isLoading={isLoading}/>)}
    </div>
  );
}

export default Films