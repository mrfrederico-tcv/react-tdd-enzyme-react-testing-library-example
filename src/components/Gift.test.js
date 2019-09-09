import React from 'react'
import { shallow } from 'enzyme'
import Gift from './Gift'

describe('Gift', () => {
  const ID = 1

  const mockOnRemove = jest.fn()
  const props = { gift: { id: ID }, onRemoveGift: mockOnRemove }
  const gift = shallow(<Gift {...props} />)

  it('render correctly', () => {
    expect(gift).toMatchSnapshot()
  })

  it('init a person and present in `state`', () => {
    const state = gift.state()
    expect(state).toEqual({ person: '', present: '' })
  })

  describe('when typing into the person input', () => {
    const PERSON = 'UNCLE'

    beforeEach(() => {
      gift
        .find('[testId="InputPerson"]')
        .simulate('change', { target: { value: PERSON } })
    })

    it('updates the person in `state`', () => {
      const { person } = gift.state()
      expect(person).toEqual(PERSON)
    })
  })

  describe('when typing into the present input', () => {
    const PRESENT = 'Golf Clubs'

    beforeEach(() => {
      gift
        .find('[testId="InputPresent"]')
        .simulate('change', { target: { value: PRESENT } })
    })

    it('updates the present in `state`', () => {
      const { present } = gift.state()
      expect(present).toEqual(PRESENT)
    })
  })

  describe('when clicking the `Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('[testId="RemoveButton"]').simulate('click')
    })

    it('calls the handleRemoveGift callback', () => {
      expect(mockOnRemove).toHaveBeenCalledWith(ID)
    })
  })
})
