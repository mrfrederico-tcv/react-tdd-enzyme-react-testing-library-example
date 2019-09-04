import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  const app = shallow(<App />)
  const COINDESK_LINK = 'https://www.coindesk.com/price'

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('contains a connected wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true)
  })

  it('contains a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true)
  })

  it('contains a link to the coindesk price page', () => {
    expect(app.find('[testID="CoindeskLink"]').props().href).toBe(COINDESK_LINK)
  })
})
