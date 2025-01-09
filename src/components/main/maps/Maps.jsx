import React from 'react'
import { useTranslation } from 'react-i18next'
import bgres from "../../../assets/bgresidense.png"
import twn from "../../../assets/twnhsn.png"
import office from "../../../assets/office.png"

function Maps() {

const { t } = useTranslation()

  return (
    <div className='flex flex-col items-center gap-20 p-12 mt-10'>
      <h1 className='text-5xl'>{t("aboutUs")}</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.1055965134065!2d44.58738416394559!3d40.192143798775284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa3241239a809%3A0xf0f421e5913d39c4!2sBagrevand%20Residense%2C%20Jrvej%2017%20str.6%2F6!5e0!3m2!1sru!2sam!4v1725964918465!5m2!1sru!2sam" width="95%" height="700vh"  loading="lazy" ></iframe>
      <div style={{width:"95%"}} className='flex flex-col flex-wrap items-center bg-gray-400 m-0 p-12'>
            <h3 className='text-5xl '>{t("ourProjects")}</h3>
            <div className='flex flex-wrap justify-center gap-20 mt-16'>
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.8338737559868!2d44.58975741284928!3d40.19181917292728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa3241239a809%3A0xf0f421e5913d39c4!2sBagrevand%20Residense%2C%20Jrvej%2017%20str.6%2F6!5e1!3m2!1sru!2sam!4v1735595840032!5m2!1sru!2sam" width="600" height="350" loading="lazy"></iframe>
                    <h5 className='text-center font-bold mt-5 text-xl'>{t("bgMap")}</h5>
                </div>
                <div className='h-96'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d417.1545967975804!2d44.59031074698085!3d40.19199708705148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sam!4v1735595584081!5m2!1sru!2sam" width='600' height="350" loading="lazy" ></iframe>
                    <h5 className='text-center font-bold mt-5 text-xl'>{t("twnMap")}</h5>
                </div>
            </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-20'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-5xl'>{t("office")}</h1>
            <h3 className='text-xl text-center'>{t("address")}</h3>
        </div>
        <img src={office} alt="" className='border-2 border-black'/>
      </div>
    </div>
  )
}

export default Maps
