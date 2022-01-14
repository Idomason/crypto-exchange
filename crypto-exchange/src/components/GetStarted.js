import React from 'react'
import './GetStarted.css'
import landingPage from './landingPage.svg'

const GetStarted = () => {
  return (
    <div className='getStarted'>
      <div className='getStartedImage'>
        <img src={landingPage} alt='illustration' width={`360px`} />
      </div>
      <div className='getStartedListItems'>
        <ul>
          <h1>Get started in three easy steps</h1>
          <li>
            <span>01</span>
            <div>
              <h3>Create an Account</h3>
              <p>Sign up for free on our website</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Add your bank account</h3>
              <p>
                Link your bank account to make Naira deposits and withdrawals
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Start buying and selling</h3>
              <p>
                Fund your account with Naira and start trading all your
                favourite coins!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GetStarted
