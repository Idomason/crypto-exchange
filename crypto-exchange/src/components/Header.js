import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import UsersIncrement from './UsersIncrement'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <UsersIncrement />
      <NavLinks />
    </div>
  )
}

export default Header
