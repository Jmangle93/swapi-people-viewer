export interface FilmType {
  title: string
}

export interface SpeciesType {
  name: string
  classification: string
  designation: string
  averageHeight: string
  skinColors: string
  hairColors: string
  averageLifespan: string
  homeworld: string
  language: string
  people: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

export interface PersonType {
  name: string
  height: string
  mass: string
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: string
  homeWorld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}
