import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import PageExample4 from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__'

/* const mockedUseExampleAsyncSlice1 = {
  exampleAsyncSlice: {
    isLoading: false,
    repositories: [{ name: 'example' }],
    error: ''
  }
} */
/* const mockedUseExampleAsyncSlice2 = {
  exampleAsyncSlice: {
    isLoading: false,
    repositories: [],
    error: 'Not found'
  }
} */
/* const mockedUseExampleAsyncSlice3 = {
  exampleAsyncSlice: {
    isLoading: true,
    repositories: [],
    error: ''
  }
} */

const mockedUseRepositoriesWithDispatch1 = {
  getFetchRepositories: jest.fn()
}
const mockedUseRepositoriesWithDispatch2 = {
  getFetchRepositories: jest.fn()
}
const mockedUseRepositoriesWithDispatch3 = {
  getFetchRepositories: jest.fn()
}

let mockedUseRepositoriesWithDispatch = mockedUseRepositoriesWithDispatch1

jest.mock('services', () => ({
  useRepositoriesWithDispatch: () => mockedUseRepositoriesWithDispatch
}))

describe('[Page] PageExample4', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should an Home page', () => {
    const { container } = renderWithProviders(<PageExample4 />)
    expect(container).toBeInTheDocument()
  })

  it.skip('should render loading when clicking "Search Repository" button while isLoading for true', () => {
    mockedUseRepositoriesWithDispatch = mockedUseRepositoriesWithDispatch3
    jest.spyOn(mockedUseRepositoriesWithDispatch, 'getFetchRepositories')

    renderWithProviders(<PageExample4 />)

    const loading = screen.getByRole('heading', { name: 'loading...' })

    expect(loading).toBeInTheDocument()
  })

  it.skip('should render error message to clicking "Search Repository" button if user in text field not exists and if isLoading is false', () => {
    mockedUseRepositoriesWithDispatch = mockedUseRepositoriesWithDispatch2
    const verifyCall = jest.spyOn(
      mockedUseRepositoriesWithDispatch,
      'getFetchRepositories'
    )

    renderWithProviders(<PageExample4 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })

    fireEvent.change(screen.getByPlaceholderText('User name'), {
      target: { value: 'everton-dgn' }
    })
    fireEvent.click(btn)

    const error = screen.getByText(/not found/i)

    expect(verifyCall).toBeCalledTimes(1)
    expect(error).toBeInTheDocument()
  })

  it('should render list of repositories when clicking "Search Repository" button if user in text field exists and if isLoading is false', () => {
    mockedUseRepositoriesWithDispatch = mockedUseRepositoriesWithDispatch1
    const verifyCall = jest.spyOn(
      mockedUseRepositoriesWithDispatch,
      'getFetchRepositories'
    )

    renderWithProviders(<PageExample4 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })

    fireEvent.change(screen.getByPlaceholderText('User name'), {
      target: { value: 'everton-dgn' }
    })
    fireEvent.click(btn)

    expect(verifyCall).toBeCalledTimes(1)
  })

  it('should not take any action if the text input is empty', () => {
    mockedUseRepositoriesWithDispatch = mockedUseRepositoriesWithDispatch2

    const verifyCall = jest.spyOn(
      mockedUseRepositoriesWithDispatch,
      'getFetchRepositories'
    )

    renderWithProviders(<PageExample4 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })

    fireEvent.click(btn)

    expect(verifyCall).toBeCalledTimes(0)
  })

  it('should go to another page by clicking the button', () => {
    mockedUseRepositoriesWithDispatch = mockedUseRepositoriesWithDispatch1

    renderWithProviders(<PageExample4 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
