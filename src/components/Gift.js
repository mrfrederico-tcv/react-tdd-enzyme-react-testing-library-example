import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap'
import styled from 'styled-components'

const Root = styled.div``

class App extends Component {
  state = {
    person: '',
    present: '',
  }

  handleInputPersonChange = evt => {
    const { value } = evt.target
    this.setState({ person: value })
  }

  handleInputPresentChange = evt => {
    const { value } = evt.target
    this.setState({ present: value })
  }

  handleRemoveGift = () => {
    const { onRemoveGift, gift } = this.props
    onRemoveGift(gift.id)
  }

  render() {
    return (
      <Root>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              testId="InputPerson"
              onChange={this.handleInputPersonChange}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              testId="InputPresent"
              onChange={this.handleInputPresentChange}
            />
          </FormGroup>
        </Form>
        <Button testId="RemoveButton" onClick={this.handleRemoveGift}>
          Remove Gift
        </Button>
      </Root>
    )
  }
}

export default App
