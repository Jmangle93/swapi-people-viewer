import { render, screen } from '@testing-library/react';

import { PersonType } from '../../types';
import Person from './Person'

describe('<Person />', () => {
  test('should render the person\'s name', () => {
    const person: PersonType = { name: 'Jek Tono Porkins', films: ['https://swapi.dev/api/films/1']}

    render(<Person person={person} isLoading={false}/>)

    screen.getByText(person.name)
  })
});
