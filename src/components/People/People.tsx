import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'

function People() {
  const [people, setPeople] = React.useState<PersonType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => setPeople(peopleResponse.results));
    setIsLoading(false);
  }, [])

  return (
    <div>
      {people.map(person => <Person person={person} isLoading={isLoading}/>)}
    </div>
  )
}

export default People
