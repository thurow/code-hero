import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import { useApi } from '../../context'
import { CharacterListDataContainer, ComicDataContainer } from '../../services/api.interfaces'

import './Hero.scss'

export function Hero() {
  const { heroId } = useParams<{ heroId: string }>()
  const history = useHistory()
  const [loading, setLoading] = React.useState<boolean>(true)
  const [loadingComic, setLoadingComics] = React.useState<boolean>(true)
  const [data, setData] = React.useState<CharacterListDataContainer>()
  const [comics, setComics] = React.useState<ComicDataContainer>()
  const api = useApi()

  const loadHero = React.useCallback(async () => {
    try {
      setLoading(true)
      const result = await api.getHero(heroId)
      setData(result)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [api, heroId])

  const loadHeroComics = React.useCallback(async () => {
    try {
      setLoadingComics(true)
      const result = await api.getHeroComics(heroId)
      setComics(result)
    } catch (err) {
      console.error(err)
    } finally {
      setLoadingComics(false)
    }
  }, [api, heroId])

  React.useEffect(() => {
    loadHero().then(() => loadHeroComics())
  }, [loadHero, loadHeroComics])

  return (
    <>
      {loading ? <Loading /> : !data?.results?.length ? 'Ocorreu um erro' : (
        <section className="hero-details">
          <div className="hero-details__back">
            <button onClick={history.goBack}>Voltar</button>
          </div>
          <div className="hero-details__avatar">
            <img
              src={`${data.results[0].thumbnail?.path ?? ''}.${data.results[0].thumbnail?.extension ?? ''}`}
              alt={data.results[0].name}
              width="300"
            />
          </div>
          <div className="hero-details__name">
            <h1>{data.results[0].name}</h1>
          </div>
          <div className="hero-details__description">
            <h2>Descrição</h2>
            <p>{data.results[0].description ? data.results[0].description : 'Sem descrição'}</p>
          </div>
          <div className="hero-details__comics">
            <h2>Histórias em quadrinhos</h2>
            {loadingComic ? <Loading /> : (
              <>
                {!comics?.results?.length ? 'Nenhuma história em quadrinhos encontrada' : (
                  <ul>
                    {comics?.results.map(comic => (
                      <li key={comic.id}>
                        <img
                          src={`${comic.thumbnail?.path ?? ''}.${comic.thumbnail?.extension}`}
                          alt={comic.title}
                          width="150"
                          loading="lazy"
                        />
                        <h3>{comic.title}</h3>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </section>
      )}
    </>
  )
}
