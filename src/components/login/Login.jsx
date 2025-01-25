import React from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Login() {

  const { t } = useTranslation()
  const navigate = useNavigate();

  const adminUrl = "http://localhost:3002/admin"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => {
    try {
      axios.get(adminUrl).then((res) => {
        const login = res.data[0].login
        const pwd = res.data[0].password
        if(login === data.login && pwd === data.password){
          localStorage.setItem("id:", res.data[0].id)
          navigate("/admin")
        }else{
          alert("Incorrect Login or Password")
        }
      })
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className=' mt-20 flex justify-center'>
      <div className='w-2/6 p-20 flex flex-col items-center justify-center gap-6 border border-gray rounded'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-bold'>Log In</h1>
          <p>{t("title")}</p>
        </div>
        <form className='flex flex-col items-center gap-5' onSubmit={handleSubmit(onSubmit)}>
          <TextField  {...register("login", { required: true })} id="outlined-basic" label="Login*" variant="outlined" style={{width:"17vw"}} />
          <TextField  {...register("password", { required: true })} type="password" id="outlined-basic" label="Password*" variant="outlined" style={{width:"17vw"}} />
          <TextField  type='submit' value={"Log In"} style={{width:"10vw"}}  />
        </form>
      </div>
       {/* aksaar77? elitarShin */}
    </div>
  )
}

export default Login
