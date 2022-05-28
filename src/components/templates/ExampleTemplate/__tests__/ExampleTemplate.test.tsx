import { screen } from '@testing-library/react'
import ExampleTemplate from '..'
import { renderWithProviders } from 'utils'

describe('[Template] Example', () => {
  it('should render a children and a title', () => {
    renderWithProviders(
      <ExampleTemplate>
        <p data-testid="select_template">Test Template</p>
      </ExampleTemplate>
    )

    const title = screen.getByRole('banner')
    const children = screen.getByTestId('select_template')

    expect(children).toBeInTheDocument()
    expect(title).toHaveTextContent('Template Example')
  })
})
