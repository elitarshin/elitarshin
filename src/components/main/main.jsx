import React, { useEffect } from 'react'
import Header from './header/Header'
import MainImg from './topSection/MainImg'
import Positives from './positives/Positives'
import Projects from './projects/Projects'
import Stories from './recentStories/Stories'
import Maps from './maps/Maps'
import Footer from './footer/Footer'
import { Button } from '@mui/material'

function Main() {
 
  return (
    <div>
      <Header/>
      <div className='flex justify-end p-2 '><Button style={{position:"fixed"}} id="btn" variant="outlined" onClick={() => window.scrollTo(0,0)}>↑</Button></div>
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
