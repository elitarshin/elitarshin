import React from 'react'
import Header from '../main/header/Header'
import build1 from "../../assets/twnhs/townhouses.png" 
import build2 from "../../assets/twnhs/townhouse2.png" 
import build3 from "../../assets/twnhs/townhouse3.png" 
import build4 from "../../assets/twnhs/townhouse4.png" 
import { useTranslation } from 'react-i18next'

function TownHouse() {

    const { t } = useTranslation()

  return (
    <div className="w-full flex flex-col justify-around">
      <Header/>
      <div className="flex p-16">
        <div className="w-3/6 flex flex-col gap-10">
          <img src={build1} classN0ame="mt-24 rounded"/>
          <div className="flex flex-wrap gap-10 justify-center ">
              <img src={build2} className="w-52 h-46 rounded" />
              <img src={build3} className="w-52 h-46 rounded" />
              <img src={build4} className="w-52 h-46 rounded" />
          </div>
        </div>
        <div className="w-3/6 flex flex-col items-center gap-12">
          <h2 className="text-4xl text-center">{t("twn")}</h2>
          <p className="text-center font-bold w-5/6">{t("twnInfo")}</p>
        </div>
      </div>
    </div>
  )
}

export default TownHouse
