import React from 'react'
import { ApiContextProvider } from '../src/context'
import { ApiInterface } from '../src/services'

export interface AppBuilderProps {
  children: React.ReactChild
  apiOverrides?: Partial<ApiInterface>
}

const AppBuilder = ({ children, apiOverrides }: AppBuilderProps) => {
  const api: ApiInterface = {
    getHeroes: async (_page: number) => Promise.resolve({}),
    ...apiOverrides
  }

  return (
    <ApiContextProvider
      api={api}
    >
      {children}
    </ApiContextProvider>
  )
}

export { AppBuilder }
