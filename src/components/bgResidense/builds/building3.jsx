import { useTranslation } from "react-i18next"
import build1 from "../../../assets/bgres/3bd/3th.jpg" 
import build2 from "../../../assets/bgres/3bd/3.1building.jpg" 
import build3 from "../../../assets/bgres/3bd/3.2building.jpg" 
import build4 from "../../../assets/bgres/3bd/3.3building.jpg" 
import gym from "../../../assets/bgres/3bd/dumbbell.png" 
import parking from "../../../assets/bgres/3bd/parking.png" 
import pool from "../../../assets/bgres/3bd/swimmer.png" 
import Header from "../../main/header/Header"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getPosts, selectPost } from "../../admin/adminSlice"
import { useEffect } from "react"

function Building3() {

  const {t} = useTranslation() 
  const allPosts = useSelector(selectPost)
  const dispatch = useDispatch()
  const url = "http://localhost:3002/3build"
  useEffect(() => {
      dispatch(getPosts({url}))
    },[])

  return (
    <div className="w-full flex flex-col justify-around ">
      <Header/>
      <div className="flex p-16">
        <div className="w-3/6">
          <img src={build1} className="w-5/6 h-5/6 mt-24"/>
        </div>
        <div className="w-3/6 flex flex-col items-center gap-12">
          <h2 className="text-4xl text-center">{t("bulding3")}</h2>
          <p className="text-center font-bold w-5/6">{t("build1Info")}</p>
          <div className="flex flex-wrap gap-4 ">
              <img src={build2} className="w-56 h-56" />
              <img src={build3} className="w-56 h-56" />
              <img src={build4} className="w-56 h-56" />
          </div>
          <div className="flex flex-wrap gap-32">
              <img src={gym} className="w-32 h-32" />
              <img src={pool} className="w-32 h-32" />
              <img src={parking} className="w-32 h-32" />
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

export default Building3
