import React from 'react'
import './Why.css'
import analytics from './analytics.svg'

const Why = () => {
  return (
    <div>
      <h1>
        Why are so many people investing in digital currencies like Bitcoin?
      </h1>
      <div className='why'>
        <div>
          <ul>
            <li>
              <div>
                <h2>A better way to move money</h2>
                <p>
                  People all over the world use Bitcoin to send money to other
                  people and pay for good & services online. It is also cheaper,
                  faster and easy to use than conventional cash.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h2>True financial freedom</h2>
                <p>
                  Like the internet, no single entity controla Bitcoin, the
                  holder is in control the entire time. It also provides users
                  with transparency and privacy
                </p>
              </div>
            </li>
            <li>
              <div>
                <h2>A new type of investment</h2>
                <p>
                  Bitcoin is the new digital gold. It is used as an alternative
                  store of wealth, portfolio diversification, and long-term
                  investment.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <img src={analytics} alt='Testimonial' width={`360px`} />
        </div>
      </div>
    </div>
  )
}

export default Why
