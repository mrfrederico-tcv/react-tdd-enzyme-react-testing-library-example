import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

import Gift from './Gift'

const Root = styled.div``
const Title = styled.h4``
const GiftContainer = styled.div``

class App extends Component {
  state = {
    gifts: [],
  }

  handleAddGift = () => {
    const { gifts } = this.state
    const ids = gifts.map(gift => gift.id)
    const maxId = ids.length > 0 ? Math.max(...ids) : 0

    gifts.push({ id: maxId + 1 })

    this.setState({ gifts })
  }

  handleRemoveGift = id => {
    const { gifts } = this.state

    const giftsAux = gifts.filter(gift => gift.id !== id)

    this.setState({ gifts: giftsAux })
  }

  render() {
    const { gifts } = this.state

    return (
      <Root>
        <Title>Gift Giver</Title>
        <GiftContainer testId="GiftContainer">
          {gifts.map(gift => (
            <Gift
              testId="Gift"
              key={gift.id}
              gift={gift}
              onRemoveGift={this.handleRemoveGift}
            />
          ))}
        </GiftContainer>
        <Button testId="Button" onClick={this.handleAddGift}>
          Add Gift
        </Button>
      </Root>
    )
  }
}

export default App
