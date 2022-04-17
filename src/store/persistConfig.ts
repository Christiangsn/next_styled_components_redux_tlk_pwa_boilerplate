import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import asyncSessionStorage from 'redux-persist/lib/storage'
import * as Reducers from '.'

const whitelist = ['exampleSimple', 'exampleWithPayload']

const persistConfig = {
  key: 'root',
  storage: asyncSessionStorage,
  whitelist
}

const reducer = combineReducers({ ...Reducers })

export const persistedReducer = persistReducer(persistConfig, reducer)
