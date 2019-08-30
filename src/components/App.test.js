import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  const app = shallow(<App />)

  it('render correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('init the `state` with an empty list of gifts', () => {
    const { gifts } = app.state()
    expect(gifts).toEqual([])
  })

  describe('when clicking the `add gift` button', () => {
    const ID = 1

    beforeEach(() => {
      app.find('[testId="Button"]').simulate('click')
    })

    afterEach(() => {
      app.setState({ gifts: [] })
    })

    it('adds a new gift to `state`', () => {
      const { gifts } = app.state()
      expect(gifts).toEqual([{ id: ID }])
    })

    it('adds a new gift to the render list', () => {
      expect(app.find('[testId="GiftContainer"]').children().length).toEqual(1)
    })

    it('creates a Gift component', () => {
      expect(app.find('[testId="Gift"]').exists()).toBe(true)
    })

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().handleRemoveGift(ID)
      })

      it('removes the gift from `state`', () => {
        const { gifts } = app.state()
        expect(gifts).toEqual([])
      })
    })
  })

  describe('when clicking the `add gift` twice', () => {
    beforeEach(() => {
      app.find('[testId="Button"]').simulate('click')
      app.find('[testId="Button"]').simulate('click')
    })

    it('creates a second gift with an id=2', () => {
      const { gifts } = app.state()

      const secondGift = gifts[1]

      expect(secondGift).toBeDefined()
      expect(secondGift.id).toEqual(2)
    })
  })
})
