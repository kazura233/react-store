import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { exampleAction, exampleAsyncAction, exampleSelector } from './modules/example'

export const App = () => {
  const count = useSelector(exampleSelector.countGetter())
  const dispatch = useDispatch()
  return (
    <div className="App">
      <p>count: {count}</p>
      <button onClick={() => dispatch(exampleAsyncAction.random())}>random</button>
      <button onClick={() => dispatch(exampleAsyncAction.save())}>save</button>
      <button onClick={() => dispatch(exampleAction.add(1))}>add one</button>
    </div>
  )
}
