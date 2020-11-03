import React from 'react'

import './NameSearch.scss';

interface NameSearchProps {
  nameFilter: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const NameSearch = ({ nameFilter, handleChange }: NameSearchProps): JSX.Element => {
  return (
    <section className="hero-search">
      <label htmlFor="name">Nome do personagem</label>
      <input
        type="search"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </section>
  )
}
