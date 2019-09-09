import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { deposit, withdraw } from '../actions/balance'

const Root = styled.div``
const Title = styled.h3``
const Separator = styled.br``
const Input = styled.input``
const Button = styled.button``

export class Wallet extends Component {
  state = {
    balance: 0,
  }

  handleUpdateBalance = ({ target: { value } }) => {
    this.setState({ balance: parseInt(value, 10) })
  }

  handleDeposit = () => {
    const { balance } = this.state
    const { deposit } = this.props

    deposit(balance)
  }

  handleWithdraw = () => {
    const { balance } = this.state
    const { withdraw } = this.props

    withdraw(balance)
  }

  render() {
    const { balance } = this.props

    return (
      <Root>
        <Title data-testid="title">Wallet balance: {balance}</Title>
        <Separator />
        <Input
          aria-label="deposit-withdraw-input"
          onChange={this.handleUpdateBalance}
        />
        <Button role="deposit" onClick={this.handleDeposit}>
          Deposit
        </Button>
        <Button role="withdraw" onClick={this.handleWithdraw}>
          Withdraw
        </Button>
      </Root>
    )
  }
}

export default connect(
  ({ balance }) => ({ balance }),
  { deposit, withdraw },
)(Wallet)
