import { screen } from '@testing-library/react'
import { Default } from '..'
import { renderWithProviders } from 'utils'

describe('[Layouts] Default', () => {
  it('should render a children', () => {
    renderWithProviders(
      <Default>
        <h1 data-testid="select_layout">Test Layout</h1>
      </Default>
    )

    expect(screen.getByTestId('select_layout')).toBeInTheDocument()
  })
})
