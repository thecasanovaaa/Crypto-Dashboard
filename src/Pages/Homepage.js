import React from 'react'
import Header from '../Components/Common/Header'
import MainComponent from '../Components/LandingPage'
import Footer from '../Components/Common/Footer'

function Homepage() {
  return (
    <div><>
      <Header/>
      <MainComponent/>
      <div style={{marginTop:"27rem"}}>
      <Footer/>
      </div>
      </>
    </div>
  )
}

export default Homepage
