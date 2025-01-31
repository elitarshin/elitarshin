import React from 'react'
import Header from '../main/header/Header'
import build1 from "../../assets/blocks/beton.jpg" 
import build2 from "../../assets/blocks/beton1.jpg" 
import build3 from "../../assets/blocks/beton2.jpg" 
import build4 from "../../assets/blocks/beton3.jpg" 
import uzel from "../../assets/blocks/betonuzel.jpg" 
import concrete1 from "../../assets/blocks/concrete1.jpg" 
import concrete2 from "../../assets/blocks/concrete2.jpg" 
import concrete3 from "../../assets/blocks/concrete3.jpg" 
import pomp from "../../assets/pomp.jpg" 
import pomp1 from "../../assets/pomp1.jpg" 
import { useTranslation } from 'react-i18next'

function Blocks() {

    const { t } = useTranslation()

  return (
    <div className="w-full flex flex-col justify-around">
      <Header/>
      <div className="w-full justify-center flex gap-20 p-16 max-md:flex-col">
        <div className="w-3/6 max-md:w-full mb-10">
          <img src={build1} className="mt-24 rounded"/>
        </div>
        <div className="w-3/6 flex flex-col items-center gap-12 max-md:w-full">
          <h2 className="text-4xl text-center mt-20">{t("block")}</h2>
          <p className="text-center font-bold w-5/6">{t("blockInfo")}</p>
          <div className="w-full flex flex-wrap gap-4 max-md:w-full justify-center ">
              <img src={build2} className="w-56 h-56 rounded-md" />
              <img src={build3} className="w-56 h-56 rounded-md" />
              <img src={build4} className="w-56 h-56 rounded-md" />
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex gap-20 p-16 max-md:flex-col">
        <div className="w-3/6 max-md:w-full mb-10">
          <img src={uzel} className="w-6/6 mt-24 rounded"/>
        </div>
        <div className="w-3/6 flex flex-col items-center gap-12 max-md:w-full">
          <h2 className="text-4xl text-center mt-20">{t("concrete")}</h2>
          <p className="text-center font-bold w-5/6">{t("concreteInfo")}</p>
          <div className="w-full flex flex-wrap gap-4 max-md:w-full justify-center">
              <img src={concrete1} className="w-56 h-56 rounded-md" />
              <img src={concrete2} className="w-56 h-56 rounded-md" />
              <img src={concrete3} className="w-56 h-56 rounded-md" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex p-16 justify-center max-md:flex-col justify-center">
        <div className="flex flex-wrap justify-center gap-4 max-md:mb-10">
            <img src={pomp} className="w-64 rounded-md"/>
            <img src={pomp1} className="w-64 rounded-md"/>
        </div>
        <div className="w-3/6 flex flex-col items-center gap-12 text-center max-md:w-full">
          <h2 className="text-4xl text-center">{t("pomp")}</h2>
          <p className="text-center font-bold w-5/6">{t("pompInfo")}</p>
        </div>
        </div>
    </div>
  )
}

export default Blocks
