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
    fetchJson<{ results: PersonType[] }>('people/?search=' + props.searchTerm)
      .then(peopleResponse => {
        setPeople(peopleResponse.results);
      });
    setIsLoading(false);
  }, [props.searchTerm])

  return (
    <div>
      {people.map(person => <Person person={person} isLoading={isLoading}/>)}
    </div>
  )
}

export default People
