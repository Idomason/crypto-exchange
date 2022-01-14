import React from 'react'
import './Logo.css'
import logo from './logo.jpg'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='Logo' width={`150px`} />
    </div>
  )
}

export default Logo
