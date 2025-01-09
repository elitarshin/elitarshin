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
    <div className="w-12/12 p-6 flex justify-between	">
      <h3 className="font-bold text-2xl">{t("title")}</h3>
      <div className="flex gap-10">
        <Link to="/"><Button id="btn" variant="text">{t("home")}</Button></Link>
        <Button id="btn" variant="text" onClick={() => window.scrollTo(0,1000)}>{t("projects")}</Button>
        <Button id="btn" variant="text" onClick={() => window.scrollTo(0,2800)}>{t("about")}</Button>
      </div>
      <div className="flex gap-1">
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
