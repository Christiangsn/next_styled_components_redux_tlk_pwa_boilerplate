import { renderWithProviders } from 'utils'
import HeadPage from '..'

describe('[Components] HeadPage', () => {
  it('should render a snapshot', () => {
    const { container } = renderWithProviders(
      <HeadPage title="Acessibilidade" />
    )

    expect(container).toMatchSnapshot()
  })
})
