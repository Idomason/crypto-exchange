import React from 'react'
import './NavLinks.css'

const NavLinks = () => {
  return (
    <div className='navLinks'>
      <ul>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Testimonial</a>
        </li>
        <li>
          <a href='#'>Sign In</a>
        </li>
        <li className='createAccount'>
          <a href='#'>Create Account</a>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks
