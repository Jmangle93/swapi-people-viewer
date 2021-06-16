import { FilmType } from '../../../types';

interface FilmProps {
  film: FilmType
  isLoading: boolean
}

function Film({ film, isLoading }: FilmProps) {
  return isLoading ? <p>Loading...</p> : <div>{film.title}</div>
}
export default Film