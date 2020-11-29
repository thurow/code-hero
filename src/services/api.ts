import CryptoJs from 'crypto-js'
import { CharacterListDataContainer, CharacterListDataWrapper, ComicDataContainer, ComicDataWrapper } from "./api.interfaces"

const DEFAULT_LIMIT = 4
const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY
const PRIVATE_KEY = process.env.REACT_APP_API_PRIVATE_KEY
const TIMESTAMP = Date.now()
const HASH = CryptoJs.MD5(`${TIMESTAMP}${PRIVATE_KEY}${API_KEY}`)

export interface  ApiInterface {
  getHeroes: (pageToLoad: number, heroName?: string) => Promise<CharacterListDataContainer>
  getHero: (heroId: string) => Promise<CharacterListDataContainer>
  getHeroComics: (heroId: string) => Promise<ComicDataContainer>
}

export const Api = (): ApiInterface => {
  return {
    async getHeroes(pageToLoad: number, heroName?: string) {
      const nameQueryParam = heroName ? `&nameStartsWith=${heroName}` : ''

      const offsetQueryParam = pageToLoad > 1 ? `&offset=${pageToLoad * DEFAULT_LIMIT}` : ''

      const limitQueryParam = `&limit=${DEFAULT_LIMIT}`

      return await fetch(`${API_URL}characters?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}${limitQueryParam}${offsetQueryParam}${nameQueryParam}`)
        .then<CharacterListDataWrapper>(res => res.json())
        .then(({ data }) => data as CharacterListDataContainer)
    },

    async getHero(heroId: string) {
      return await fetch(`${API_URL}characters/${heroId}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`)
        .then<CharacterListDataWrapper>(res => res.json())
        .then(({ data }) => data as CharacterListDataContainer)
    },

    async getHeroComics(heroId: string) {
      return await fetch(`${API_URL}characters/${heroId}/comics?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}&characterId=${heroId}`)
        .then<ComicDataWrapper>(res => res.json())
        .then(({ data }) => data as ComicDataContainer)
    }
  }
}
