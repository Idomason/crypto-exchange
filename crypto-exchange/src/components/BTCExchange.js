import React, { useEffect } from 'react'
import './BTCExchange.css'
import CurrencyRow from './CurrencyRow'

const BASE_URL =
  ' https://rest.coinapi.io/v1/exchanges E7F1C241-0164-4903-9816-FE537C27326B'

const BTCExchange = () => {
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])
  return (
    <div className='btcExchange'>
      <CurrencyRow />
    </div>
  )
}

export default BTCExchange
