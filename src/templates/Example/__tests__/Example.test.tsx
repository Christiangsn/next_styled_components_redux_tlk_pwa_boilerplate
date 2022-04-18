import { screen } from '@testing-library/react'
import { Example } from '..'
import { renderWithProviders } from 'utils'

describe('[Template] Example', () => {
  it('should render a children', () => {
    renderWithProviders(
      <Example>
        <h1 data-testid="select_template">Test Template</h1>
      </Example>
    )

    expect(screen.getByTestId('select_template')).toBeInTheDocument()
  })
})
