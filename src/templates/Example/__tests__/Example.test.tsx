import { screen } from '@testing-library/react'
import { Example } from '..'
import { renderWithProviders } from 'utils'

describe('[Layouts] LayoutExample', () => {
  it('should render a children', () => {
    renderWithProviders(
      <Example>
        <h1 data-testid="select_layout">Test Layout</h1>
      </Example>
    )

    expect(screen.getByTestId('select_layout')).toBeInTheDocument()
  })
})
