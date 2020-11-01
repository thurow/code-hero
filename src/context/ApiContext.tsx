import React, { useContext, createContext, Context } from 'react'
import { ApiInterface } from '../services'

// @ts-expect-error
export const ApiContext: Context<ApiInterface> = createContext({})

interface ApiContextProviderProps {
  children: React.ReactChild
  api: ApiInterface
}

export const ApiContextProvider = ({ children, api }: ApiContextProviderProps) => {
  return (
    <ApiContext.Provider
      value={
        api
      }
    >
      {children}
    </ApiContext.Provider>
  )
}

export const useApi = (): ApiInterface => useContext(ApiContext)
