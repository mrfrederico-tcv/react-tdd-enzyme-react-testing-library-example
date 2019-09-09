import 'jest-styled-components'
import React from 'react'
import { Loot } from './Loot'
import { render } from '../utils/testUtils'

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn()
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin }

  it('renders properly', () => {
    const { container } = render(<Loot {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  describe('when there are valid bitcoin props', () => {
    it('displays the correct bitcoin value', () => {
      props = {
        ...props,
        bitcoin: { bpi: { USD: { rate: '1,000' } } },
      }
      const { getByText } = render(<Loot {...props} />)
      const TEXT = 'Bitcoin balance: 0.01'

      expect(getByText(TEXT)).toBeTruthy()
    })
  })
})
