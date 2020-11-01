import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from './Home'
import { AppBuilder } from '../../../__tests__'

const setup = () => {
  return render(
    <AppBuilder>
      <Home />
    </AppBuilder>
  )
}

test('should render home page', () => {
  setup()

  expect(screen.queryByText('Busca de personagens')).toBeInTheDocument()
})
