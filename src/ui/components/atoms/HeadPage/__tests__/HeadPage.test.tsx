import { renderWithProviders } from 'tests/providers'
import HeadPage from '..'

describe('[Component] HeadPage', () => {
  it('should render a snapshot', () => {
    const { container } = renderWithProviders(
      <HeadPage title="Acessibilidade" />
    )
    expect(container).toMatchSnapshot()
  })
})
