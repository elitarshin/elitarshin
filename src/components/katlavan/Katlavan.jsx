import React from 'react'
import Header from '../main/header/Header'
import build1 from "../../assets/katlavan/katlavan.jpg" 
import build2 from "../../assets/katlavan/katlavan1.jpg" 
import build3 from "../../assets/katlavan/katlavan2.jpg" 
import build4 from "../../assets/katlavan/katlavan3.jpg" 
import { useTranslation } from 'react-i18next'

function Katlavan() {

    const { t } = useTranslation()

  return (
    <div className="w-full flex flex-col justify-around">
    <Header/>
    <div className="w-full justify-center flex gap-20 p-16 max-md:flex-col">
      <div className="w-3/6 max-md:w-full mb-10">
        <img src={build1} />
      </div>
      <div className="w-3/6 flex flex-col items-center gap-12 max-md:w-full">
        <h2 className="text-4xl text-center">{t("katlavan")}</h2>
        <p className="text-center font-bold w-5/6">{t("katlavanInfo")}</p>
        <div className="flex flex-wrap justify-center gap-4">
            <img src={build2} className="w-56 h-56" />
            <img src={build3} className="w-56 h-56" />
            <img src={build4} className="w-56 h-56" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Katlavan
