import { screen } from '@testing-library/react'
import { Error } from '..'
import { renderWithProviders } from 'utils'

describe('[Layouts] Error', () => {
  it('should render a children', () => {
    renderWithProviders(
      <Error>
        <h1 data-testid="select_layout">Test Layout</h1>
      </Error>
    )

    expect(screen.getByTestId('select_layout')).toBeInTheDocument()
  })
})
