import { FilmType } from '../../../types';

interface FilmProps {
  film: FilmType
  isLoading: boolean
}

function Film({ film, isLoading }: FilmProps) {
  return isLoading ? <p>Loading...</p> : <p>{film.title}</p>;
}
export default Film