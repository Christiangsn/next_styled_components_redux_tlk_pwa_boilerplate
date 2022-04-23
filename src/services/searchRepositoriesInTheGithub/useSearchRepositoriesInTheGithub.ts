import { useState } from 'react'
import { searchRepositoriesInTheGithub } from '.'
import { RepositoriesTypes } from './types'

export const useSearchRepositoriesInTheGithub = () => {
  const [repositoriesGithub, setRepositoriesGithub] =
    useState<RepositoriesTypes>()

  const getRepositoriesGithub = async (user: string): Promise<void> => {
    setRepositoriesGithub({ data: [], error: '', loading: true })

    const { data, error, loading } = await searchRepositoriesInTheGithub(user)

    setRepositoriesGithub({ data, error, loading })
  }

  return { getRepositoriesGithub, repositoriesGithub }
}
