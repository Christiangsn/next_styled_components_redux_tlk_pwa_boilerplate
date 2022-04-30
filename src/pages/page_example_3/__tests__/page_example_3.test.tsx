import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import PageExample3 from '../index.page'
import { mockedPrefetch, mockedPush } from '__mocks__'

const mockedUseRepositoriesInTheGithub1 = {
  getRepositoriesGithub: jest.fn(),
  repositoriesGithub: {
    isLoading: false,
    repositories: [{ name: 'example' }],
    error: ''
  }
}
const mockedUseRepositoriesInTheGithub2 = {
  getRepositoriesGithub: jest.fn(),
  repositoriesGithub: {
    isLoading: false,
    repositories: [],
    error: 'Not found'
  }
}
const mockedUseRepositoriesInTheGithub3 = {
  getRepositoriesGithub: jest.fn(),
  repositoriesGithub: {
    isLoading: true,
    repositories: [],
    error: ''
  }
}

let mockedUseRepositoriesInTheGithub = mockedUseRepositoriesInTheGithub1

jest.mock('services', () => ({
  useRepositoriesInTheGithub: () => mockedUseRepositoriesInTheGithub
}))

describe('[Page] PageExample3', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should an Home page', () => {
    const { container } = renderWithProviders(<PageExample3 />)
    expect(container).toBeInTheDocument()
  })

  it('should render loading when clicking "Search Repository" button while isLoading for true', () => {
    mockedUseRepositoriesInTheGithub = mockedUseRepositoriesInTheGithub3
    jest.spyOn(mockedUseRepositoriesInTheGithub, 'getRepositoriesGithub')

    renderWithProviders(<PageExample3 />)

    const loading = screen.getByRole('heading', { name: 'loading...' })

    expect(loading).toBeInTheDocument()
  })

  it('should render error message to clicking "Search Repository" button if user in text field not exists and if isLoading is false', () => {
    mockedUseRepositoriesInTheGithub = mockedUseRepositoriesInTheGithub2
    const verifyCall = jest.spyOn(
      mockedUseRepositoriesInTheGithub,
      'getRepositoriesGithub'
    )

    renderWithProviders(<PageExample3 />)

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
    mockedUseRepositoriesInTheGithub = mockedUseRepositoriesInTheGithub1
    const verifyCall = jest.spyOn(
      mockedUseRepositoriesInTheGithub,
      'getRepositoriesGithub'
    )

    renderWithProviders(<PageExample3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })

    fireEvent.change(screen.getByPlaceholderText('User name'), {
      target: { value: 'everton-dgn' }
    })
    fireEvent.click(btn)

    expect(verifyCall).toBeCalledTimes(1)
  })

  it('should not take any action if the text input is empty', () => {
    mockedUseRepositoriesInTheGithub = mockedUseRepositoriesInTheGithub2

    const verifyCall = jest.spyOn(
      mockedUseRepositoriesInTheGithub,
      'getRepositoriesGithub'
    )

    renderWithProviders(<PageExample3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })

    fireEvent.click(btn)

    expect(verifyCall).toBeCalledTimes(0)
  })

  it('should go to another page by clicking the button', () => {
    mockedUseRepositoriesInTheGithub = mockedUseRepositoriesInTheGithub1

    renderWithProviders(<PageExample3 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
