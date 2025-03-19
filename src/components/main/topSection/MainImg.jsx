import { useTranslation } from "react-i18next"
import { Button } from '@mui/material'

function MainImg() {
  const { t } = useTranslation()
  return (
    <div style={{height:"80vh"}} className="w-12/12">
      <div className="bg-[url('../../../assets/mainimg.jpg')] bg-no-repeat bg-cover bg-center w-full h-5/6	flex justify-center items-center">
        <div className="bg-[url('../../../assets/h6-slider-graphic-1.png')] bg-no-repeat bg-cover bg-center w-full h-2/6 flex flex-col justify-center items-center max-md:h-3/6 w-full">
          <h3 className="text-5xl font-bold mb-8 max-sm:mb-2">{t("mainTitle")}</h3>
          <h4 className="text-red-800 text-xl text-center font-bold	">{t("quote")}</h4>
        </div>
      </div>
      <div className='flex justify-end p-2 '><Button style={{position:"fixed"}} id="btn" variant="outlined" onClick={() => window.scrollTo(0,0)}>↑</Button></div>
    </div>
  )
}

export default MainImg
