import React from 'react'
import HomepageText from './HomepageText'
import HomepageState from './HomepageState'
import HomePageBottomText from './HomePageBottomText'
import GetStarted from './GetStarted'
import Card from './Card'
import Testimonial from './Testimonial'
import Question from './Question'
import Why from './Why'
import Footer from './Footer'
import BTCExchange from './BTCExchange'

const Homepage = () => {
  return (
    <div>
      <HomepageText />
      <HomepageState />
      <BTCExchange />
      <HomePageBottomText />
      <Card />
      <GetStarted />
      <Testimonial />
      <Question />
      <Why />
      <Footer />
    </div>
  )
}

export default Homepage
