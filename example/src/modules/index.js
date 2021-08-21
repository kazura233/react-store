import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { exampleReducer } from './example/example-reducer'
import { createAsyncAction } from '../../../lib/react-store'

const rootReducer = combineReducers({
  example: exampleReducer,
})

export const rootStore = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export const asyncAction = createAsyncAction()
