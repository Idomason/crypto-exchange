import React from 'react'
import './Question.css'

const Question = () => {
  return (
    <div>
      <h1>Frequently asked questions</h1>
      <div className='questionContainer'>
        <div className='card'>
          <i
            className='icon fas fa-question-circle'
            style={{ fontSize: '40px' }}
          ></i>
          <h2>How is the price calculated?</h2>
          <p>
            The price of Bitcoin and other digital currencies are determined by
            supply and demand: the buyers who want a certain currency and the
            sellers who have that currency. Luno does not set the price of
            Bitcoin or any digital currency.
          </p>
        </div>
        <div className='card'>
          <i
            className='icon fas fa-question-circle'
            style={{ fontSize: '40px' }}
          ></i>
          <h2>Why is the Bitcoin price different on Google?</h2>
          <p>
            There is no global Bitcoin price, it isn't pegged to any currency,
            country or Bitcoin platform. When you see the price on Google, it is
            simply showing an estimated, international price
          </p>
        </div>
        <div className='card'>
          <i
            className='icon fas fa-question-circle'
            style={{ fontSize: '40px' }}
          ></i>
          <h2>Do I need to buy a whole Bitcoin?</h2>
          <p>
            No. Bitcoin, Ethereum and most other digital currencies are
            divisible. You can spend a small amount of money and buy or sell
            very small amounts over time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Question
