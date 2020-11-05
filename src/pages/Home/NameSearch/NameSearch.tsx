import React from 'react'

import './NameSearch.scss';

interface NameSearchProps {
  nameFilter: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  loading: boolean
}

export const NameSearch = ({ nameFilter, handleChange, loading }: NameSearchProps): JSX.Element => {
  return (
    <section className="hero-search">
      <label htmlFor="name">Nome do personagem</label>
      <input
        placeholder="Search"
        type="search"
        name="name"
        id="name"
        disabled={loading}
        value={nameFilter}
        onChange={handleChange}
      />
    </section>
  )
}
