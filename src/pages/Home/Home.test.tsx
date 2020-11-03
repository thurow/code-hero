import React from 'react'
import { render, RenderResult, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Home } from './Home'
import { AppBuilder, AppBuilderProps } from '../../../__tests__'

const setup = (appBuilderProps?: AppBuilderProps): RenderResult => {
  return render(
    <AppBuilder {...appBuilderProps}>
      <Home />
    </AppBuilder>
  )
}

test('should render home page', async () => {
  setup()

  expect(screen.queryByTestId('loading-data')).toBeInTheDocument()

  await waitForElementToBeRemoved(() => screen.getByTestId('loading-data'))

  expect(screen.queryByText('Busca de personagens')).toBeInTheDocument()
})
