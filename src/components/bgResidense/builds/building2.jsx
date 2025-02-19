import { useTranslation } from "react-i18next"
import build1 from "../../../assets/bgres/2bd/2.building.jpg" 
import build2 from "../../../assets/bgres/2bd/2.1building.jpg" 
import build3 from "../../../assets/bgres/2bd/2.2building.jpg" 
import build4 from "../../../assets/bgres/2bd/2.3building.jpg" 
import office from "../../../assets/bgres/2bd/office.png" 
import parking from "../../../assets/bgres/2bd/parking.png" 
import shoppingCart from "../../../assets/bgres/2bd/shopping-cart.png" 
import Header from "../../main/header/Header"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getPosts, selectPost } from "../../admin/adminSlice"
import { useEffect } from "react"

function Building2() {

  const {t} = useTranslation() 
  const allPosts = useSelector(selectPost)
  const dispatch = useDispatch()
  const url = "http://localhost:3002/2build"
  useEffect(() => {
      dispatch(getPosts({url}))
    },[])

  return (
    <div className="w-full flex flex-col ">
      <Header/>
      <div className="w-full justify-center flex gap-20 p-16 max-md:flex-col">
        <div className="w-3/6 max-md:w-full mb-10">
          <img src={build1} className="w-6/6 h-6/6 mt-24"/>
        </div>
        <div className="w-3/6 flex flex-col items-center gap-12 max-md:w-full">
          <h2 className="text-4xl text-center">{t("bulding2")}</h2>
          <p className="text-center font-bold w-5/6">{t("build2Info")}</p>
          <div className="flex flex-wrap gap-4 max-md:w-full justify-center">
              <img src={build2} className="w-56 h-56" />
              <img src={build3} className="w-56 h-56" />
              <img src={build4} className="w-56 h-56" />
          </div>
          <div className="flex flex-wrap gap-32 justify-center">
              <img src={office} className="w-20 h-20" />
              <img src={parking} className="w-20 h-20" />
              <img src={shoppingCart} className="w-20 h-20" />
          </div>
        </div>
        <div className="h-1/6">
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

export default Building2
