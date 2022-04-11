import { screen } from '@testing-library/react'
import { Error } from 'layouts/Error'
import { renderWithTheme } from 'utils'

describe('[Layouts] Error', () => {
  it('should render a children', () => {
    renderWithTheme(
      <Error>
        <h1 data-testid="select_layout">Test Layout</h1>
      </Error>
    )

    expect(screen.getByTestId('select_layout')).toBeInTheDocument()
  })
})
