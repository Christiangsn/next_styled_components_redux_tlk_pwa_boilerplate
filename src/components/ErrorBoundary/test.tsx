import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils'
import ErrorBoundary from '.'

const spy = jest.spyOn(console, 'error')
spy.mockImplementation(() => {})

const ChildWithError = () => {
  throw new Error()
}

describe('[Components] ErrorBoundary', () => {
  test('should render an error message', () => {
    renderWithTheme(
      <ErrorBoundary>
        <ChildWithError />
      </ErrorBoundary>
    )

    expect(screen.queryByText('Algo deu errado.')).toBeInTheDocument()
  })
})
