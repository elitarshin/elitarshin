import { Button, TextareaAutosize, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { langsContext } from '../../main';
import { changeLanguage } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addAllPost, delPosts, getPosts, selectPost } from './adminSlice';

function Admin() {

  const {t} = useTranslation()
  const value = useContext(langsContext);

  let [title, setTitle] = useState("")
  let [post, setPost] = useState("")

  let [build, setBuild] = useState(0) 
  let [url, setUrl] = useState("http://localhost:3002/bgPosts") 

  const allPosts = useSelector(selectPost)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts({url}))
  },[url, dispatch])
  
  return (
    <div className='flex justify-between'>
        <div className='w-1/6 h-screen bg-stone-700	p-3 '>
            <h1 className='text-2xl text-neutral-400 text-white font-bold ml-2 '>{t("title")}</h1>
            <div className='flex flex-col gap-2 mt-10'>
                <div style={build === 0 ? {backgroundColor:"gray"} : {}} className='w-5/6 p-2 font-bold rounded hover:bg-zinc-600' onClick={() => {setBuild(0);setUrl("http://localhost:3002/bgPosts")}}>{t("allPosts")}</div>
                <div style={build === 1 ? {backgroundColor:"gray"} : {}} className='w-5/6 p-2 font-bold rounded hover:bg-zinc-600' onClick={() => {setBuild(1);setUrl("http://localhost:3002/1build")}}>{t("bulding1news")}</div>
                <div style={build === 2 ? {backgroundColor:"gray"} : {}} className='w-5/6 p-2 font-bold rounded hover:bg-zinc-600' onClick={() => {setBuild(2);setUrl("http://localhost:3002/2build")}}>{t("bulding2news")}</div>
                <div style={build === 3 ? {backgroundColor:"gray"} : {}} className='w-5/6 p-2 font-bold rounded hover:bg-zinc-600' onClick={() => {setBuild(3);setUrl("http://localhost:3002/3build")}}>{t("bulding3news")}</div>
            </div>
            <div className='mt-10 ml-2'>
              <Button style={{marginTop:"auto"}} variant="outlined" color='error' onClick={() => {
                localStorage.removeItem("id:");
                window.location.reload();
              }}>Sign Out</Button> 

            </div>
        </div>
        <div className='w-3/6 flex flex-col items-center mt-10'>
            <div className='flex flex-col gap-5 mt-5'>
                <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="Title" variant="outlined" style={{width:"30vw"}}/>
                <TextareaAutosize value={post} onChange={(e) => setPost(e.target.value)} minRows={10} style={{width:"30vw",border:"1px solid lightGray", borderRadius:"3px"}}/>
                <div className='border rounded p-2 flex items-center justify-between'>
                <Button variant="outlined" color='success' onClick={() => {
                  if(title.trim() && post.trim()){
                    dispatch(addAllPost({title, post, url}))
                  }else{
                    alert("Fill Up Fields")
                  };
                  setTitle("");
                  setPost("");
                }}>Post</Button>
                  <Button variant="outlined" color='error' onClick={() => dispatch(delPosts({url}))}>Delete All</Button> 
                </div>
            </div>
            {
             <div className='w-full'>
              <div className='w-full flex flex-col items-center gap-2 mt-10'>
              {
                allPosts.map(({id, title, data}) => {
                  return <div key={id} className="w-full flex flex-col justify-center  border p-4 ">
                    <h1 className='font-bold'>{title}</h1>
                    <span>{data}</span>
                  </div>
                })
              }
              </div>
             </div> 
            }
        </div>
        <div className='flex gap-2 h-14 p-2'>
        {
          value.map((item) => {
            return  <Button key={item.id} id="btn" variant="outlined" onClick={() => changeLanguage(item.lang)}>{item.title}</Button>
          })
        }
        </div>
    </div>
    
  )
}

export default Admin
