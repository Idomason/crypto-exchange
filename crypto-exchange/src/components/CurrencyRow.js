import React from 'react'
import './CurrencyRow.css'

const CurrencyRow = () => {
  return (
    <div className='currencyRow'>
      <div>
        <select>
          <option value='BTC'>BTC</option>
          <option value='ETH'>ETH</option>
          <option value='LTC'>LTC</option>
          <option value='USDT'>USDT</option>
        </select>
        <input type='number' className='input' />
      </div>
      <div>
        <select>
          <option value='NGN'>NGN</option>
          <option value='NGN'>USD</option>
        </select>
        <input type='number' className='input' />
      </div>
      <button className='btn-buy'>Buy BTC</button>
    </div>
  )
}

export default CurrencyRow
