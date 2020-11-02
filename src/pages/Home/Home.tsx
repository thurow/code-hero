import React from 'react'
import ReactPaginate from 'react-paginate'
import { useApi } from '../../context'
import { CharacterListDataContainer } from '../../services/api.interfaces'
import { HeroesList } from './HeroesList'

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
      setData(result)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [api, page])

  const pageCount = React.useMemo(() => {
    return Math.ceil((data?.total ?? 0) / 4)
  }, [data])

  const handleChangePage = React.useCallback(({ selected: selectedPage }) => {
    setPage(selectedPage)
  }, [])

  React.useEffect(() => {
    loadHeroes()
  }, [loadHeroes])

  return (
    <div className="page-content">
      <h1>Busca de personagens</h1>
      <section className="page-content__heroes">
        {
          loading ? <p data-testid="loading-heroes">Carregando...</p> : (
            <>
              <HeroesList data={data?.results ?? []} />
              <section className="pagination">
                <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                  breakClassName={'hidden'}
                  pageCount={pageCount}
                  forcePage={page}
                  onPageChange={handleChangePage}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  containerClassName={"pagination__list"}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
                />
              </section>
            </>
          )}
      </section>
    </div>
  )
}
