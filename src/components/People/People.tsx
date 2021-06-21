import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'

interface Props {
  searchTerm: string;
}

function People(props: Props) {
  const [people, setPeople] = React.useState<PersonType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    let isMounted = true;
    fetchJson<{ results: PersonType[] }>('people/?search=' + props.searchTerm)
      .then(peopleResponse => {
        setPeople(peopleResponse.results);
        if (isMounted) {
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error(err);
      });
    return function cleanup() {
      console.log('Unmount people');
      isMounted = false;
    }
  }, [props.searchTerm])

  return isLoading ? <p>Loading...</p> : <div> {people.map(person => <Person person={person} isLoading={isLoading}/>)} </div>;
}

export default People
