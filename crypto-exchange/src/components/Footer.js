import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li>
          <span>
            <h4>Currencies</h4>
            <p>Ethereum</p>
            <p>Bitcoin</p>
            <p>Tether (USDT)</p>
            <p>Perfect Money</p>
            <p>Web Money</p>
            <p>Neteller</p>
            <p>Litecoin</p>
            <p>USD Coin</p>
          </span>
        </li>
        <li>
          <span>
            <h4>Services</h4>
            <p>Buy & Sell</p>
            <p>Naira Wallet</p>
          </span>
        </li>
        <li>
          <span>
            <h4>Company</h4>
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </span>
        </li>
      </ul>
      <p>© NairaDirect 2022</p>
    </div>
  )
}

export default Footer
