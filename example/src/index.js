import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { rootStore } from './modules'

render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
