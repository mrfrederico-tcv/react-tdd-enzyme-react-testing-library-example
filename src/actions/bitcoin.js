import { FETCH_BITCOIN } from './constants'

export const fetchBitcoin = () => async dispatch => {
  const bitcoin = await fetch(
    'https://api.coindesk.com/v1/bpi/currentprice.json',
  ).then(res => res.json())

  dispatch({ type: FETCH_BITCOIN, bitcoin })
}
