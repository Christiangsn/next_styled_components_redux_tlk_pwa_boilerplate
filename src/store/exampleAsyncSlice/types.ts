import { PayloadAction } from '@reduxjs/toolkit'
import { getRepositoriesInTheGithubTypes } from 'services/repositories/get/fetch/types'

export type PayloadType = PayloadAction<getRepositoriesInTheGithubTypes>
