import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'

import { FETCH_BITCOIN } from './constants'
import { fetchBitcoin } from './bitcoin'

const createMockStore = configureMockStore([thunk])
const store = createMockStore({bitcoin: {}})
const mockResponse = {body: {bpi: 'bitcoin price index'}}

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse)

it('creates a async action to fetch the bitcoin value', () => {
  const expectedActions = [{bitcoin: mockResponse.body, type: FETCH_BITCOIN}]

  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})