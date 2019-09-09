import 'jest-styled-components'
import React from 'react'
import { Wallet } from './Wallet'
import { render, fireEvent } from '../utils/testUtils'

const mockDeposit = jest.fn()
const mockWithdrawal = jest.fn()
const setup = () => {
  const props = { balance: 10, deposit: mockDeposit, withdraw: mockWithdrawal }

  const utils = render(<Wallet {...props} />)
  const input = utils.getByLabelText('deposit-withdraw-input')
  const depositBtn = utils.getByRole('deposit')
  const withdrawBtn = utils.getByRole('withdraw')

  return {
    ...utils,
    input,
    depositBtn,
    withdrawBtn,
  }
}

describe('Wallet', () => {
  it('renders properly', () => {
    const { container } = setup()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('displays the balance from `props`', () => {
    const { getByText } = setup()
    const TEXT = 'Wallet balance: 10'

    expect(getByText(TEXT)).toBeTruthy()
  })

  describe('when the user types into the wallet input', () => {
    const USER_BALANCE = '25'
    let utils
    beforeEach(() => {
      utils = setup()
      const EVENT = { target: { value: USER_BALANCE } }

      fireEvent.change(utils.input, EVENT)
    })

    it('should display the correct value', () => {
      expect(utils.input.value).toBe(USER_BALANCE)
    })

    describe('and the user wants to make a deposit', () => {
      it('called `deposit()` and displays the correct wallet balance', () => {
        const TEXT = 'Wallet balance: 35'

        fireEvent.click(utils.depositBtn)

        expect(mockDeposit).toHaveBeenCalledWith(parseInt(USER_BALANCE, 10))
        utils.rerender(<Wallet balance={35} />)
        expect(utils.getByText(TEXT)).toBeTruthy()
      })
    })

    describe('and the user wants to make a withdrawal', () => {
      it('dispatches the `withdraw()` it receives from props with local balance', () => {
        const TEXT = 'Wallet balance: 0'

        fireEvent.click(utils.withdrawBtn)

        expect(mockWithdrawal).toHaveBeenCalledWith(parseInt(USER_BALANCE, 10))
        utils.rerender(<Wallet balance={0} />)
        expect(utils.getByText(TEXT)).toBeTruthy()
      })
    })
  })
})
