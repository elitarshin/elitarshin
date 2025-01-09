import { useTranslation } from "react-i18next"

function MainImg() {
  const { t } = useTranslation()
  return (
    <div style={{height:"80vh"}} className="w-12/12">
      <div className="bg-[url('../../../assets/mainimg.jpg')] bg-no-repeat bg-cover bg-center w-full h-5/6	flex justify-center items-center">
        <div className="bg-[url('../../../assets/h6-slider-graphic-1.png')] bg-no-repeat bg-cover bg-center w-full h-2/6 flex flex-col justify-center items-center ">
          <h3 className="text-5xl font-bold mb-8">{t("mainTitle")}</h3>
          <h4 className="text-red-800 text-xl font-bold	">{t("quote")}</h4>
        </div>
      </div>
    </div>
  )
}

export default MainImg
