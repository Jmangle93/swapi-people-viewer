import React from 'react'

import { fetchJson, stripIndex } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'

interface Props {
  // To do: Make search optional, alternative a list of page/index pairs
  searchTerm: string;
}

function People(props: Props) {
  const [people, setPeople] = React.useState<PersonType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  

  React.useEffect(() => {
    const aborter = new AbortController();
    fetchJson<{ results: PersonType[] }>('people/?search=' + props.searchTerm)
      .then(peopleResponse => {
        if (peopleResponse.results.length > 0) {
          setPeople(peopleResponse.results);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
    return function cleanup() {
      aborter.abort();
    }
  }, [props.searchTerm])
  
  if (people.length === 0 && !isLoading) {
    return <div><p>Search returned no results...</p></div>;
  } else {
    return isLoading ? <p>Loading Star Wars people...</p> : <div> {people.map(person => <Person key={stripIndex(person.url)} person={person} isLoading={isLoading}/>)} </div>;
  }
}

export default People
