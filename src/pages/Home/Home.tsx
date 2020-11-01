import React from 'react'
import { useApi } from '../../context'
import { CharacterListDataContainer } from '../../services/api.interfaces'

import './Home.scss'

export function Home() {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [data, setData] = React.useState<CharacterListDataContainer>()
  const [page, setPage] = React.useState<number>(1)
  const api = useApi()

  const loadHeroes = React.useCallback(async () => {
    try {
      setLoading(true)
      const result = await api.getHeroes(page)
      console.log(result)
      setData(result)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [api, page])

  const handleChangePage = React.useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  React.useEffect(() => {
    loadHeroes()
  }, [loadHeroes])

  return (
    <div className="page-content">
      <h1>Busca de personagens</h1>
      {
        loading ? <p data-testid="loading-heroes">Carregando...</p> : (
          <ul>
            {data?.results?.map(hero => <li key={hero.id}>{hero.name}</li>)}
          </ul>
        )}
    </div>
  )
}
