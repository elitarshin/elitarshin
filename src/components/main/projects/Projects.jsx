import React from 'react'
import { useTranslation } from 'react-i18next'
import ResImg from '../../../assets/projects/sectionimg.jpg'
import Twn from '../../../assets/projects/townhouses.png'
import beton from '../../../assets/projects/beton.jpg'
import katlavan from '../../../assets/projects/katlavan2.jpg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


function Projects() {

    const { t } = useTranslation()

  return (
    <div className='flex flex-col items-center justify-center '>
      <h1 className='text-5xl mt-8'>{t("projects")}</h1>
      <p className='text-xl mt-5 text-center'>{t("projectsQoute")}</p>
      <div className='flex items-center justify-center flex-wrap gap-8 mt-20'>
        <div className='w-1/6 border-2 p-12 h-96 flex flex-col justify-center items-center max-md:w-2/6 max-sm:w-5/6'>
            <img src={ResImg} className='w-72 h-44' />
            <h3 className='text-xl text-center font-bold mt-5 mb-5'>{t("bgresidence")}</h3>
            <Link to="/BG"><Button id="btn" variant="outlined">{t("seemore")}</Button></Link>
        </div>
        <div className='w-1/6  border-2 p-12 h-96 flex flex-col justify-center items-center max-md:w-2/6 max-sm:w-5/6'>
            <img src={Twn} className='w-72 h-56' />
            <h3 className='text-xl text-center font-bold mt-5 mb-5'>{t("townhouses")}</h3>
            <Link to="/townHouses"><Button id="btn" variant="outlined">{t("seemore")}</Button></Link>
        </div>
        <div className='w-1/6  border-2 p-12 h-96 flex flex-col justify-center items-center max-md:w-2/6 max-sm:w-5/6'>
          <img src={katlavan} className='w-72 h-56' />
          <h3 className='text-xl text-center font-bold mt-5 mb-5'>{t("katlavan")}</h3>
          <Link to="/katlavan"><Button id="btn" variant="outlined">{t("seemore")}</Button></Link>
          </div>
        <div className='w-1/6  border-2 p-12 h-96 flex flex-col justify-center items-center max-md:w-2/6 max-sm:w-5/6'>
          <img src={beton} className='w-72 h-44' />
          <h3 className='text-xl text-center font-bold mt-5 mb-5'>{t("blocks")}</h3>
          <Link to="/blocks"><Button id="btn" variant="outlined">{t("seemore")}</Button></Link>
          </div>
      </div>
    </div>
  )
}

export default Projects

