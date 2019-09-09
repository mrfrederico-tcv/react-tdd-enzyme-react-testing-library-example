import React from 'react'
import { render } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

let __STORE__

const AllTheProviders = ({ children }) => {
  return <Provider store={__STORE__}>{children}</Provider>
}

const customRender = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...options
  } = {},
) => {
  __STORE__ = store

  return {
    ...render(ui, { wrapper: AllTheProviders, ...options }),
    store,
  }
}

export * from '@testing-library/react'
// override render method
export { customRender as render }
