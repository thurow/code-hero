export interface Image {
  path?: string
  extension?: string
}

export interface EventList {
  items?: Array<{ name?: string }>
}

export interface SeriesList {
  items?: Array<{ name?: string }>
}

export interface CharacterFromList {
  id?: number
  name?: string
  description?: string
  thumbnail?: Image
  series?: SeriesList
  events?: EventList
}

export interface Comic {
  id?: number
  title?: string
  description?: string
  thumbnail?: Image
  images?: Image[]
}

export interface CharacterListDataContainer {
  offset?: number
  limit?: number
  total?: number
  count?: number
  results?: CharacterFromList[]
}

export interface ComicDataContainer {
  offset?: number
  limit?: number
  total?: number
  count?: number
  results?: Comic[]
}

export interface CharacterListDataWrapper {
  code?: number
  status?: string
  copyright?: string
  attributionText?: string
  attributionHTML?: string
  data?: CharacterListDataContainer
  etag?: string
}

export interface ComicDataWrapper {
  code?: number
  status?: string
  copyright?: string
  attributionText?: string
  attributionHTML?: string
  data?: ComicDataContainer
  etag?: string
}
