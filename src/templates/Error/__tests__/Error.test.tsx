import { screen } from '@testing-library/react'
import { Error } from '..'
import { renderWithProviders } from 'utils'

describe('[Template] Error', () => {
  it('should render a children', () => {
    renderWithProviders(
      <Error>
        <h1 data-testid="select_template">Test Template</h1>
      </Error>
    )

    expect(screen.getByTestId('select_template')).toBeInTheDocument()
  })
})
