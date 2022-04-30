import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import PageExample5 from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__'

const mockedUseExampleAsyncThunk1 = {
  setFetchRepositories: jest.fn(),
  exampleAsyncThunk: {
    isLoading: false,
    repositories: [{ name: 'example' }],
    error: ''
  }
}
const mockedUseExampleAsyncThunk2 = {
  setFetchRepositories: jest.fn(),
  exampleAsyncThunk: {
    isLoading: false,
    repositories: [],
    error: 'Not found'
  }
}
const mockedUseExampleAsyncThunk3 = {
  setFetchRepositories: jest.fn(),
  exampleAsyncThunk: {
    isLoading: true,
    repositories: [],
    error: ''
  }
}

let mockedUseExampleAsyncThunk = mockedUseExampleAsyncThunk1

jest.mock('store/exampleAsyncThunk', () => ({
  useExampleAsyncThunk: () => mockedUseExampleAsyncThunk
}))

describe('[Page] PageExample5', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should an Home page', () => {
    const { container } = renderWithProviders(<PageExample5 />)
    expect(container).toBeInTheDocument()
  })

  it('should render loading when clicking "Search Repository" button while isLoading for true', () => {
    mockedUseExampleAsyncThunk = mockedUseExampleAsyncThunk3
    jest.spyOn(mockedUseExampleAsyncThunk, 'setFetchRepositories')

    renderWithProviders(<PageExample5 />)

    const loading = screen.getByRole('heading', { name: 'loading...' })

    expect(loading).toBeInTheDocument()
  })

  it('should render error message to clicking "Search Repository" button if user in text field not exists and if isLoading is false', () => {
    mockedUseExampleAsyncThunk = mockedUseExampleAsyncThunk2
    const verifyCall = jest.spyOn(
      mockedUseExampleAsyncThunk,
      'setFetchRepositories'
    )

    renderWithProviders(<PageExample5 />)

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
    mockedUseExampleAsyncThunk = mockedUseExampleAsyncThunk1
    const verifyCall = jest.spyOn(
      mockedUseExampleAsyncThunk,
      'setFetchRepositories'
    )

    renderWithProviders(<PageExample5 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })

    fireEvent.change(screen.getByPlaceholderText('User name'), {
      target: { value: 'everton-dgn' }
    })
    fireEvent.click(btn)

    expect(verifyCall).toBeCalledTimes(1)
  })

  it('should not take any action if the text input is empty', () => {
    mockedUseExampleAsyncThunk = mockedUseExampleAsyncThunk2

    const verifyCall = jest.spyOn(
      mockedUseExampleAsyncThunk,
      'setFetchRepositories'
    )

    renderWithProviders(<PageExample5 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })

    fireEvent.click(btn)

    expect(verifyCall).toBeCalledTimes(0)
  })

  it('should go to another page by clicking the button', () => {
    mockedUseExampleAsyncThunk = mockedUseExampleAsyncThunk1

    renderWithProviders(<PageExample5 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
