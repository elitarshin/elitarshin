import React from 'react'
import { useTranslation } from 'react-i18next'
import bgstory from "../../../assets/projects/sectionimg.jpg"
import twnstory from "../../../assets/projects/townhouses.png"
import katlavan from "../../../assets/projects/katlavan2.jpg"

function Stories() {

const { t } = useTranslation()

return (
    <div className='flex flex-col items-center mt-24'>
      <h1 className='text-5xl '>{t("recentStories")}</h1>
      <h1 className='mt-4 text-4xl text-amber-600 mb-10'>{t("dfprj")}</h1>
      <div className='w-full border-2 p-2 flex justify-center flex-wrap gap-28'>
        <div className='w-4/5 flex flex-col gap-5 text-center border-2 p-4 max-sm:w-4/5'>
            <img src={bgstory} alt="" />
            <h3 className='text-3xl font-bold'>{t("bgstories")}</h3>
            <h4 className="text-xl font-bold">{t("builds")}</h4>
            <h3>{t("bgabout")}</h3>
        </div>
        <div className='flex flex-col items-center justify-around gap-10'>
            <div className='w-96 h-72 flex flex-col items-center gap-4 border-2 p-4'>
                <img src={twnstory} className='w-96' />
                <h3 className='text-xl font-bold'>{t("twnstories")}</h3>
            </div>
            <div className='w-96 h-72 flex flex-col items-center gap-4 border-2 p-4'>
                <img src={katlavan} className='w-96 h-52' />
                <h3 className='text-xl font-bold'>{t("katlavanstories")}</h3>
            </div>
        </div>
        <div className='flex flex-col flex-wrap justify-around gap-4 text-center max-md:flex-row flex-wrap max-sm:flex-row flex-wrap'>
            <div className='w-72 h-40 flex items-center justify-center p-2 border-2 font-bold text-xl max-md:w-2/6 max-sm:w-2/6 text-xs text-center '>{t("apartments")}</div>
            <div className='w-72 h-40 flex items-center justify-center p-2 border-2 font-bold text-xl max-md:w-2/6 max-sm:w-2/6 text-xs text-center'>{t("twnbuilds")}</div>
            <div className='w-72 h-40 flex items-center justify-center p-2 border-2 font-bold text-xl flex justify-center max-md:w-2/6 max-sm:w-2/6 text-xs '>{t("earthworks")}</div>
        </div>
      </div>

    </div>
  )
}

export default Stories
