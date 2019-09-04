import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { fetchBitcoin } from '../actions/bitcoin'

const Title = styled.h3``

export class Loot extends Component {
  componentDidMount() {
    const { fetchBitcoin } = this.props

    fetchBitcoin()
  }

  computeBitcoin = () => {
    const { bitcoin, balance } = this.props

    if (Object.keys(bitcoin).length === 0) return ''

    return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10)
  }

  render() {
    return (
      <Title testID="Title">Bitcoin balance: {this.computeBitcoin()}</Title>
    )
  }
}

export default connect(
  ({ balance, bitcoin }) => ({ balance, bitcoin }),
  { fetchBitcoin },
)(Loot)
