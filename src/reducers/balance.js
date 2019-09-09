import { SET_BALANCE, DEPOSIT, WITHDRAW } from '../actions/constants'
import { read_cookie, bake_cookie } from 'sfcookies'

const BALANCE_COOKIE = 'BALANCE_COOKIE'

const balance = (state = 0, action) => {
  let balance = 0

  switch (action.type) {
    case SET_BALANCE:
      balance = action.balance
      break
    case DEPOSIT:
      balance = state + action.deposit
      break
    case WITHDRAW:
      balance = state - action.withdraw
      break
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state
  }

  bake_cookie(BALANCE_COOKIE, balance)

  return balance
}

export default balance
