import React, { Component } from 'react'
import './HomepageState.css'

export class HomepageState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      buy: '',
      sell: '',
    }
  }

  buyMessage() {
    this.setState({
      sell: '',
      buy: 'Buy crypto with your bank account',
    })
  }

  sellMessage() {
    this.setState({
      buy: '',
      sell: 'Withdraw naira equivalent to your bank account.',
    })
  }

  render() {
    return (
      <div className='homepageState'>
        <button className='buy' id='button' onClick={() => this.buyMessage()}>
          Buy
        </button>
        <button id='button' onClick={() => this.sellMessage()}>
          Sell
        </button>
        <p>{this.state.buy}</p>
        <p>{this.state.sell}</p>
      </div>
    )
  }
}

export default HomepageState
