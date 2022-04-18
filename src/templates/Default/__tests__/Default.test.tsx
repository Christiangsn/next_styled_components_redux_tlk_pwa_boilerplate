import { screen } from '@testing-library/react'
import { Default } from '..'
import { renderWithProviders } from 'utils'

describe('[Template] Default', () => {
  it('should render a children', () => {
    renderWithProviders(
      <Default>
        <h1 data-testid="select_template">Test Template</h1>
      </Default>
    )

    expect(screen.getByTestId('select_template')).toBeInTheDocument()
  })
})
