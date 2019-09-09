import balanceReducer from './balance'
import balanceReducer2 from './balance'
import { SET_BALANCE, DEPOSIT, WITHDRAW } from '../actions/constants'

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const BALANCE = 10

    it('sets a balance', () => {
      const ACTION = { type: SET_BALANCE, balance: BALANCE }

      expect(balanceReducer(undefined, ACTION)).toEqual(BALANCE)
    })

    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(BALANCE)
      })
    })
  })

  it('deposits into the balance', () => {
    const DEPOSIT_VALUE = 10
    const INITIAL_STATE = 5
    const ACTION = { type: DEPOSIT, deposit: DEPOSIT_VALUE }

    expect(balanceReducer(INITIAL_STATE, ACTION)).toEqual(
      INITIAL_STATE + DEPOSIT_VALUE,
    )
  })

  it('withdraw from the balance', () => {
    const WITHDRAW_VALUE = 10
    const INITIAL_STATE = 20
    const ACTION = { type: WITHDRAW, withdraw: WITHDRAW_VALUE }

    expect(balanceReducer(INITIAL_STATE, ACTION)).toEqual(
      INITIAL_STATE - WITHDRAW_VALUE,
    )
  })
})
