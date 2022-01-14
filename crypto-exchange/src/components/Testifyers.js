import React from 'react'
import './Testifyers.css'
import tesifyer1 from './testifyer1.svg'
import tesifyer2 from './testifyer2.svg'
import tesifyer3 from './testifyer3.svg'
import mobileUI from './mobileUI.svg'

const Testifyers = () => {
  return (
    <div className='testifyers'>
      <div>
        <ul>
          <li>
            <span>
              <img src={tesifyer1} alt='Testifyer' style={{ width: '40px' }} />
            </span>
            <div>
              <p>
                Naira Direct deserves 6 stars if possible. It has all the
                qualities to be Nigeria's No.1.
              </p>
              <h4>
                <i>Banimibo-ofori, Rivers State.</i>
              </h4>
            </div>
          </li>
          <li>
            <span>
              <img src={tesifyer2} alt='Testifyer' style={{ width: '40px' }} />
            </span>
            <div>
              <p>
                At first I was skeptical but I had to give it a try. The
                transaction was smooth and easy.
              </p>
              <h4>
                <i>Anu, Lagos State.</i>
              </h4>
            </div>
          </li>
          <li>
            <span>
              <img src={tesifyer3} alt='Testifyer' style={{ width: '40px' }} />
            </span>
            <div>
              <p>
                Good job done here... everything was done less than an hour.
              </p>
              <h4>
                <i>Ubong Asukwo, Cross River State.</i>
              </h4>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <img src={mobileUI} alt='Testimonial' width={`360px`} />
      </div>
    </div>
  )
}

export default Testifyers
