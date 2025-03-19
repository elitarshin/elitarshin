import React, { useEffect } from 'react'
import Header from './header/Header'
import MainImg from './topSection/MainImg'
import Positives from './positives/Positives'
import Projects from './projects/Projects'
import Stories from './recentStories/Stories'
import Maps from './maps/Maps'
import Footer from './footer/Footer'

function Main() {
 
  return (
    <div>
      <Header/>
      <MainImg/>
      <Positives/>
      <Projects/>
      <Stories/>
      <Maps/>
      <Footer/>
    </div>
  )
}

export default Main
