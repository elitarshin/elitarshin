import { useTranslation } from "react-i18next"
import build1 from "../../../assets/bgres/1bd/1.1building.jpg" 
import build2 from "../../../assets/bgres/1bd/1.2building.jpg" 
import build3 from "../../../assets/bgres/1bd/1.3building.jpg" 
import build4 from "../../../assets/bgres/1bd/1.4building.jpg" 
import pharmacy from "../../../assets/bgres/1bd/pharmacy.png" 
import parking from "../../../assets/bgres/1bd/parking.png" 
import playground from "../../../assets/bgres/1bd/playground.png" 
import Header from "../../main/header/Header"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getPosts, selectPost } from "../../admin/adminSlice"
import { useEffect } from "react"

function Building1() {

  const {t} = useTranslation() 
  const allPosts = useSelector(selectPost)
  const dispatch = useDispatch()
  const url = "http://localhost:3002/1build"
  useEffect(() => {
      dispatch(getPosts({url}))
    },[])

  return (
    <div className="w-full flex flex-col justify-around">
      <Header/>
      <div className="w-full justify-center flex gap-20 p-16 max-md:flex-col">
        <div className="w-3/6 max-md:w-full mb-10">
          <img src={build1} className="mt-24"/>
        </div>
        <div className="w-3/6 flex flex-col items-center gap-12 max-md:w-full flex">
          <h2 className="text-4xl text-center">{t("bulding1")}</h2>
          <p className="text-center font-bold w-5/6">{t("build1Info")}</p>
          <div className="w-full flex flex-wrap gap-4 max-md:w-full justify-center">
              <img src={build2} className="w-56 h-56 max-md:w-auto max-sm:w-5/6" />
              <img src={build3} className="w-56 h-56 max-md:w-auto max-sm:w-5/6" />
              <img src={build4} className="w-56 h-56 max-md:w-auto max-sm:w-5/6" />
          </div>
          <div className="w-full flex justify-around ">
              <img src={pharmacy} className="w-20 h-20" />
              <img src={parking} className="w-20 h-20" />
              <img src={playground} className="w-20 h-20" />
          </div>
        </div>
        <div>
          <Link to="/BG"><Button id="btn" variant="outlined">↑</Button></Link>
        </div>
      </div>
      <div className='w-full flex justify-center '>
            <div className='w-full flex flex-col items-center gap-2 mt-10 mb-10'>
            <h1 className='text-4xl mb-10'>{t("news")}</h1>
              {
                allPosts.map(({id, title, data}) => {
                  return <div key={id} className="w-3/6 flex flex-col justify-center border p-4 rounded-ml ">
                    <h1 className='font-bold'>{title}</h1>
                    <span>{data}</span>
                  </div>
                  
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Building1
