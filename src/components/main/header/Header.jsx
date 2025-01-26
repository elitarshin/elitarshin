import "./header.css"
import Button from '@mui/material/Button';
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { langsContext } from "../../../main";


function Header() {

  const { t } = useTranslation()
  const value = useContext(langsContext);

  
  return (
    <div className="w-12/12 p-6 flex justify-between max-md:p-2 max-sm:justify-between p-2">
      <h3 className="font-bold text-2xl max-md:hidden max-sm:hidden">{t("title")}</h3>
      <div className="flex gap-10 max-sm:flex-col gap-2">
        <Button id="btn" variant="text"><Link to="/">{t("home")}</Link></Button>
        <Button id="btn" variant="text" onClick={() => window.scrollTo(0,1000)}>{t("projects")}</Button>
        <Button id="btn" variant="text" onClick={() => window.scrollTo(0,2800)}>{t("about")}</Button>
      </div>
      <div className="flex gap-1 max-md:flex-col gap-0 max-sm:flex-col gap-2">
        {
          value.map((item) => {
            return  <Button key={item.id} id="btn" variant="text" onClick={() => changeLanguage(item.lang)}>{item.title}</Button> 
          })
        }
      </div>
    </div>
  )
}

export default Header
