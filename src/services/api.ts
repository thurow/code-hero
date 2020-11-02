import CryptoJs from 'crypto-js'
import { CharacterListDataContainer, CharacterListDataWrapper } from "./api.interfaces"

const DEFAULT_OFFSET = 4
const API_URL = 'http://gateway.marvel.com/v1/public/'
const API_KEY = '7988c058976e1702f2cfaf64858bcba5'
const PRIVATE_KEY = '15cf8d296b5483ee3d8f1c11d59bfe0dcd3d356b'
const HASH = CryptoJs.MD5(`1${PRIVATE_KEY}${API_KEY}`)

export interface  ApiInterface {
  getHeroes: (pageToLoad: number) => Promise<CharacterListDataContainer>
}

export const Api = (): ApiInterface => {
  return {
    async getHeroes(pageToLoad: number) {
      return await fetch(`${API_URL}characters?ts=1&apikey=${API_KEY}&hash=${HASH}&limit=${DEFAULT_OFFSET}&offset=${pageToLoad * DEFAULT_OFFSET}`)
        .then<CharacterListDataWrapper>(res => res.json())
        .then(({ data }) => data as CharacterListDataContainer)
    }
  }
}
