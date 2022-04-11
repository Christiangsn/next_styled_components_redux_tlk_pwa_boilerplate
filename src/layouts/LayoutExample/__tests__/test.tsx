import { screen } from '@testing-library/react'
import { LayoutExample } from 'layouts/LayoutExample'
import { renderWithProviders } from 'utils'

describe('[Layouts] LayoutExample', () => {
  it('should render a children', () => {
    renderWithProviders(
      <LayoutExample>
        <h1 data-testid="select_layout">Test Layout</h1>
      </LayoutExample>
    )

    expect(screen.getByTestId('select_layout')).toBeInTheDocument()
  })
})
