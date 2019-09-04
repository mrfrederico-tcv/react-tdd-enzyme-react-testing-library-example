import React from 'react'
import { shallow } from 'enzyme'
import { Wallet } from './Wallet'

describe('Wallet', () => {
  const mockDeposit = jest.fn()
  const mockWithdrawal = jest.fn()
  const PROPS = { balance: 10, deposit: mockDeposit, withdraw: mockWithdrawal }
  const wallet = shallow(<Wallet {...PROPS} />)

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot()
  })

  it('displays the balance from `props`', () => {
    const TEXT = 'Wallet balance: 10'

    expect(wallet.find('[testID="Title"]').text()).toEqual(TEXT)
  })

  it('creates an input to deposit into or withdraw from the balance', () => {
    expect(wallet.find('[testID="Input"]').exists()).toBe(true)
  })

  describe('when the user types into the wallet input', () => {
    const USER_BALANCE = '25'

    beforeEach(() => {
      wallet
        .find('[testID="Input"]')
        .simulate('change', { target: { value: USER_BALANCE } })
    })

    it('updates the local wallet balance in `state` and converts it to number', () => {
      const { balance } = wallet.state()

      expect(balance).toEqual(parseInt(USER_BALANCE, 10))
    })

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('[testID="DepositBtn"]').simulate('click')
      })

      it('dispatches the `deposit()` it receives from props with local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(USER_BALANCE, 10))
      })
    })

    describe('and the user wants to make a withdrawal', () => {
      beforeEach(() => {
        wallet.find('[testID="WithdrawBtn"]').simulate('click')
      })

      it('dispatches the `withdraw()` it receives from props with local balance', () => {
        expect(mockWithdrawal).toHaveBeenCalledWith(parseInt(USER_BALANCE, 10))
      })
    })
  })
})
