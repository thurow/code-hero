import CryptoJs from 'crypto-js'
import { CharacterListDataContainer, CharacterListDataWrapper } from "./api.interfaces"

const DEFAULT_LIMIT = 4
const API_URL = 'http://gateway.marvel.com/v1/public/'
const API_KEY = '7988c058976e1702f2cfaf64858bcba5'
const PRIVATE_KEY = '15cf8d296b5483ee3d8f1c11d59bfe0dcd3d356b'
const HASH = CryptoJs.MD5(`1${PRIVATE_KEY}${API_KEY}`)

export interface  ApiInterface {
  getHeroes: (pageToLoad: number, heroName?: string) => Promise<CharacterListDataContainer>
}

export const Api = (): ApiInterface => {
  return {
    async getHeroes(pageToLoad: number, heroName?: string) {
      const nameQueryParam = heroName ? `&nameStartsWith=${heroName}` : ''

      const offsetQueryParam = pageToLoad > 1 ? `&offset=${pageToLoad * DEFAULT_LIMIT}` : ''

      const limitQueryParam = `&limit=${DEFAULT_LIMIT}`

      return await fetch(`${API_URL}characters?ts=1&apikey=${API_KEY}&hash=${HASH}${limitQueryParam}${offsetQueryParam}${nameQueryParam}`)
        .then<CharacterListDataWrapper>(res => res.json())
        .then(({ data }) => data as CharacterListDataContainer)
    }
  }
}
