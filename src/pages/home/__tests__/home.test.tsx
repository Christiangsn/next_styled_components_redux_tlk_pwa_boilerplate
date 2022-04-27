import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import Home from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__'

describe('[Page] Home', () => {
  beforeEach(() => {
    jest.resetModules()
    mockedPush.mockClear()
    mockedPrefetch.mockClear()
  })

  it('should an Home page', () => {
    const { container } = renderWithProviders(<Home />)
    expect(container).toBeInTheDocument()
  })

  it('should alternate the text displayed in two h1 each time the button is clicked', () => {
    renderWithProviders(<Home />)

    const btn = screen.getByRole('button', { name: 'Change Global State' })
    const titleSectionStateExample1 = screen.getByRole('heading', {
      name: 'Redux Example State: false'
    })
    const titleSectionPayload1 = screen.getByRole('heading', {
      name: 'Payload: Empty'
    })

    expect(titleSectionStateExample1).toBeInTheDocument()
    expect(titleSectionPayload1).toBeInTheDocument()

    fireEvent.click(btn)

    const titleSectionStateExample2 = screen.getByRole('heading', {
      name: 'Redux Example State: true'
    })
    const titleSectionPayload2 = screen.getByRole('heading', {
      name: 'Payload: Example Text'
    })

    expect(titleSectionStateExample2).toBeInTheDocument()
    expect(titleSectionPayload2).toBeInTheDocument()

    fireEvent.click(btn)

    const titleSectionStateExample3 = screen.getByRole('heading', {
      name: 'Redux Example State: false'
    })
    const titleSectionPayload3 = screen.getByRole('heading', {
      name: 'Payload: Empty'
    })

    expect(titleSectionStateExample3).toBeInTheDocument()
    expect(titleSectionPayload3).toBeInTheDocument()
  })

  const dataTests = [
    { buttonNumber: 1 },
    { buttonNumber: 2 },
    { buttonNumber: 3 },
    { buttonNumber: 4 },
    { buttonNumber: 5 }
  ]

  dataTests.forEach(({ buttonNumber }) => {
    it(`should go to another page by clicking the button ${buttonNumber} and it should preload the next page with the onMouseEnter event`, () => {
      renderWithProviders(<Home />)

      const btn = screen.getByRole('button', {
        name: `Page Example ${buttonNumber}`
      })

      fireEvent.click(btn)
      fireEvent.mouseEnter(btn)

      expect(mockedPush).toBeCalledTimes(1)
      expect(mockedPrefetch).toBeCalledTimes(1)
      expect(mockedPush).toHaveBeenCalledWith(`page_example_${buttonNumber}`)
      expect(mockedPrefetch).toHaveBeenCalledWith(
        `page_example_${buttonNumber}`
      )
    })
  })
})
