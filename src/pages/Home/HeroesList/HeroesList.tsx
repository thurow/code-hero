import React, { Fragment } from 'react'
import { CharacterFromList } from '../../../services/api.interfaces'

export interface HeroesListProps {
  data: CharacterFromList[]
}

const HeroesList = ({ data }: HeroesListProps): JSX.Element => {
  return (
    <div className="heroes-table">
      {!data?.length ? <p data-testid="empty-heroes">Sem resultados</p> : (
        <>
          <ul className="heroes-table__header">
            <li>Personagem</li>
            <li>Séries</li>
            <li>Eventos</li>
          </ul>
          <ul className="heroes-table__items">
            {data.map(hero => (
              <li className="heroes-table__items hero" key={hero.id}>
                <div className="hero__name">
                  <img src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`} alt={hero.name} width="48" />
                  <strong>{hero.name}</strong>
                </div>
                <div className="hero__series">
                  {hero.series?.items?.slice(0, 3).map((serie, idx) => (
                    <Fragment key={`${hero.id}-serie-${idx}`}>
                      {serie.name}<br />
                    </Fragment>
                  ))}
                </div>
                <div className="hero__events">
                  {hero.events?.items?.slice(0, 3).map((event, idx) => (
                    <Fragment key={`${hero.id}-event-${idx}`}>
                      {event.name}<br />
                    </Fragment>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export { HeroesList }
