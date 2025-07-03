import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../main/header/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, selectPost } from '../admin/adminSlice'
import build1 from "../../assets/build1/build1.1.jpg"
import build2 from "../../assets/build1/build1.2.jpg"
import build3 from "../../assets/build1/build1.3.jpg"
import build21 from "../../assets/build2/build2.1.jpg"
import build22 from "../../assets/build2/build2.2.jpg"
import build23 from "../../assets/build2/build2.3.jpg"

function BgResidense() {

    const { t } = useTranslation()
    const allPosts = useSelector(selectPost)
    const dispatch = useDispatch()
    const url = "http://localhost:3002/bgPosts"
    useEffect(() => {
        dispatch(getPosts({url}))
      },[])
      
    const data = [
      {
        id:1,
        name:"Շենք 1",
        description:"1-ին մասնաշենքում ավարտման փուլում են երեսապատման, էլեկտրամատակարարման, օդափոխության և հակահրդեհային անվտանգության ապահովման աշխատանքները։ 2-րդ և 3-րդ մասնաշենքերում աշխատանքները գտնվում են ընթացքի մեջ։",
        img1:build1,
        img2:build2,
        img3:build3,
      },
      {
        id:2,
        name:"Շենք 2",
        description:"Առաջին մասնաշենքում բետոնային աշխատանքները արդեն մեկնարկել են։ Ներկայումս աշխատանքներ են իրականացվում ավտոկայանատեղիի առաջին հարկում։ Երկրորդ մասնաշենքի հիմքը արդեն փորված է, իսկ այս պահին ընթանում են երրորդ մասնաշենքի հիմքային աշխատանքները:",
        img1:build21,
        img2:build22,
        img3:build23,
      },
    

    ]




    return (
    <div className='flex flex-col'>
        <Header/>
        <div className='w-full flex justify-center mt-16 max-md:flex-col items-center'>
            <div className='w-1/6 hover:scale-105 flex flex-col items-center hover:z-20 max-md:w-full'>
                <Link to="/BG/1"><div className='bg-[url("../../../assets/bgres/1.1building.jpg")] flex bg-no-repeat bg-cover bg-center p-56 bg-black rounded-full border-8 border-white max-md:p-40 max-sm:p-28'></div>
                <h3 className='mt-10 text-center text-2xl font-bold max-md:mt-1 mb-10'>{t("bulding1")}</h3></Link>
            </div>
            <div className='w-1/6 z-10 flex flex-col items-center hover:scale-105 max-md:w-full'>
                <Link to="/BG/2"><div className='bg-[url("../../../assets/bgres/right.jpg")] bg-no-repeat bg-cover bg-center p-56 bg-black rounded-full border-8 border-white max-md:p-40 max-sm:p-28'></div>
                <h3 className='mt-10 text-center text-2xl font-bold max-md:mt-1 mb-10'>{t("bulding2")}</h3></Link>
            </div>
            <div className='w-1/6 flex flex-col items-center hover:scale-105 hover:z-20 max-md:w-full'>
                <Link to="/BG/3"><div className='bg-[url("../../../assets/bgres/3th.jpg")] bg-no-repeat bg-cover bg-center p-56 bg-black rounded-full border-8 border-white max-md:p-40 max-sm:p-28'></div>
                <h3 className='mt-10 text-center text-2xl font-bold max-md:mt-1 mb-10'>{t("bulding3")}</h3></Link>
            </div>
        </div>
        <div className='w-full flex justify-center mt-20 p-20'>
            <div className='w-full flex flex-col items-center gap-2 mt-10 mb-10'>
            <h1 className='text-4xl mb-10'>{t("news")}</h1>
              {
                // allPosts.map(({id, title, data}) => {
                //   return <div key={id} className="w-3/6 flex flex-col justify-center border p-4 rounded-ml ">
                //     <h1 className='font-bold'>{title}</h1>
                //     <span>{data}</span>
                //   </div>
                data.map((data) => {
                  return <div className='flex' key={data.id}>
                    <div >
                      <h1 className='font-bold'>{data.name}</h1>
                      <p className='w-4/6'>{data.description}</p>
                    </div>
                    <div className='w-5/6 flex gap-8'>
                      <div>
                        <img src={data.img1} className='w-96 rounded-xl' alt="" />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <img src={data.img2} className='w-48 rounded-xl' alt="" />
                        <img src={data.img3} className='w-48 rounded-xl' alt="" />
                      </div>
                    </div>
                  </div>
                })
                  
              }
            </div>
        </div>
        {/* <button><Link to="/admin">test</Link></button> */}
    </div>
  )
}

export default BgResidense
