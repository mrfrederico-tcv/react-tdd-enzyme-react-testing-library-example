import bitcoinReducer from './bitcoin'
import { FETCH_BITCOIN } from '../actions/constants'

describe('bitcoinReducer', () => {
  const BITCOIN_DATA = { bpi: 'bitcoin price index' }

  it('fetches and sets the bitcoin data', () => {
    expect(
      bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: BITCOIN_DATA }),
    ).toEqual(BITCOIN_DATA)
  })
})
