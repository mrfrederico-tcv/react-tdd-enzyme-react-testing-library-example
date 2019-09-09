// *** INTEGRATION TESTS ***
import 'jest-styled-components'
import React from 'react'

import App from './App'
import { render, fireEvent } from '../utils/testUtils'

const setup = store => {
  const utils = render(<App />, store)

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

describe('App', () => {
  it('renders properly', () => {
    const { container } = render(<App />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('contains the initial wallet balance', () => {
    const { getByText } = render(<App />)
    const TEXT = 'Wallet balance: 0'

    expect(getByText(TEXT)).toBeTruthy()
  })

  it('contains the initial bitcoin balance', async () => {
    const { findByText } = render(<App />)
    const TEXT = 'Bitcoin balance: 0'

    expect(await findByText(TEXT)).toBeTruthy()
  })

  it('contains a link to the coindesk price page', () => {
    const { getByText, getByTestId } = render(<App />)
    const TEXT = 'Powered by'
    const COINDESK_LINK = 'https://www.coindesk.com/price'

    expect(getByText(TEXT)).toBeTruthy()
    expect(getByTestId('coindesk-link').href).toBe(COINDESK_LINK)
  })

  describe('when the user types into wallet input', () => {
    let utils
    beforeEach(() => {
      const USER_BALANCE = '25'
      const EVENT = { target: { value: USER_BALANCE } }

      utils = setup()
      fireEvent.change(utils.input, EVENT)
    })

    afterEach(() => {})

    it('makes a deposit & a withdraw', () => {
      const DEPOSIT_TEXT = 'Wallet balance: 25'
      const WITHDRAW_TEXT = 'Wallet balance: 0'

      fireEvent.click(utils.depositBtn)
      expect(utils.getByText(DEPOSIT_TEXT)).toBeTruthy()

      fireEvent.click(utils.withdrawBtn)
      expect(utils.getByText(WITHDRAW_TEXT)).toBeTruthy()
    })
  })
})
