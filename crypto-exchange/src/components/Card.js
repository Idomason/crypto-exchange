import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='cardContainer'>
      <div className='card'>
        <i
          className='fa-solid fa-arrow-right-arrow-left icon'
          style={{ fontSize: '40px' }}
        ></i>
        <h2>Instant Buy & Sell</h2>
        <p>
          Your Naira Direct account is credited instantly when you buy and sell
          coins
        </p>
      </div>
      <div className='card'>
        <i className='icon fas fa-lock' style={{ fontSize: '40px' }}></i>
        <h2>Secure Wallet</h2>
        <p>You can store your bitcoin in our secure wallet for free.</p>
      </div>
      <div className='card'>
        <div>
          <i
            className='icon fa-solid fa-thumbs-up icon'
            style={{ fontSize: '40px' }}
          ></i>
        </div>
        <h2>Tested & Trusted</h2>
        <p>
          We are trusted by thousands of active bitcoin traders that understand
          the importance of security and good rates.
        </p>
      </div>
    </div>
  )
}

export default Card
