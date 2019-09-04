import { SET_BALANCE, DEPOSIT, WITHDRAW } from './constants'
import { setBalance, deposit, withdraw } from './balance'

it('creates an actions to set the balance', () => {
  const BALANCE = 0
  const ACTION = { type: SET_BALANCE, balance: BALANCE }

  expect(setBalance(BALANCE)).toEqual(ACTION)
})

it('creates an actions to deposit into the balance', () => {
  const DEPOSIT_VALUE = 10
  const ACTION = { type: DEPOSIT, deposit: DEPOSIT_VALUE }

  expect(deposit(DEPOSIT_VALUE)).toEqual(ACTION)
})

it('creates an actions to withdraw the balance', () => {
  const WITHDRAW_VALUE = 10
  const ACTION = { type: WITHDRAW, withdraw: WITHDRAW_VALUE }

  expect(withdraw(WITHDRAW_VALUE)).toEqual(ACTION)
})
