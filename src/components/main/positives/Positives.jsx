import React from 'react'
import { useTranslation } from 'react-i18next'


function Positives() {

  const { t } = useTranslation()

  return (
    <div className='flex justify-center mb-10'>
      <div className='w-5/6 flex flex-wrap justify-around items-center '>
        <div className='flex flex-col items-center'>
          <div className="bg-[url('../../../assets/positives/design.png')] bg-no-repeat bg-cover bg-center w-32	h-32	"></div>
          <h5 className='text-center text-xl font-bold'>{t("innovativeEngineering")}</h5>
        </div>
        <div className='flex flex-col items-center'>
          <div className="bg-[url('../../../assets/positives/house.png')] bg-no-repeat bg-cover bg-center w-32	h-32	"></div>
          <h5 className='text-center text-xl font-bold'>{t("smartConstruction")}</h5>
        </div>
        <div className='flex flex-col items-center'>
          <div className="bg-[url('../../../assets/positives/building.png')] bg-no-repeat bg-cover bg-center w-32	h-32	"></div>
          <h5 className='text-center text-xl font-bold'>{t("sustainableSolutions")}</h5>
        </div>
        <div className='flex flex-col items-center'>
          <div className="bg-[url('../../../assets/positives/architecture.png')] bg-no-repeat bg-cover bg-center w-32	h-32	"></div>
          <h5 className='text-center text-xl font-bold'>{t("advnacedMaterials")}</h5>
        </div >
        <div className='flex flex-col items-center'>
          <div className="bg-[url('../../../assets/positives/kran.png')] bg-no-repeat bg-cover bg-center w-32	h-32	"></div>
          <h5 className='text-center text-xl font-bold'>{t("precisionBuilding")}</h5>
        </div>
        <div className='flex flex-col items-center'>
          <div className="bg-[url('../../../assets/positives/construction-machine.png')] bg-no-repeat bg-cover bg-center w-32	h-32	"></div>
          <h5 className='text-center text-xl font-bold'>{t("cuttingEdgeTechnology")}</h5>
        </div>
      </div>
    </div>
  )
}

export default Positives
