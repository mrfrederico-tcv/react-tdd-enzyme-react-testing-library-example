import React, { Component } from 'react'
import styled from 'styled-components'

import Wallet from './Wallet'
import Loot from './Loot'

const COINDESK_LINK = 'https://www.coindesk.com/price'

const Root = styled.div``
const Title = styled.h4``
const Separator = styled.hr``
const CoinDeskContainer = styled.div``
const CoindeskLink = styled.a``

class App extends Component {
  render() {
    return (
      <Root>
        <Title>Loot Check</Title>
        <Separator />
        <Wallet />
        <Loot />
        <CoinDeskContainer>
          Powered by{' '}
          <CoindeskLink
            data-testid="coindesk-link"
            target="_blank"
            href={COINDESK_LINK}
          >
            Coindesk
          </CoindeskLink>
        </CoinDeskContainer>
      </Root>
    )
  }
}

export default App
