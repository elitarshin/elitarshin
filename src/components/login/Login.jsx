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
      <div className='w-1/5 p-20 flex flex-col items-center justify-center gap-6 border border-gray rounded max-sm:w-5/6 p-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-3xl font-bold'>LOGIN</h1>
          <p className='text-center'>{t("title")}</p>
        </div>
        <div className='w-full'>
          <form className='w-full flex flex-col items-center gap-5' onSubmit={handleSubmit(onSubmit)}>
            <TextField  {...register("login", { required: true })} id="outlined-basic" label="Login*" variant="outlined" style={{width:"100%"}} />
            <TextField  {...register("password", { required: true })} type="password" id="outlined-basic" label="Password*" variant="outlined" style={{width:"100%"}} />
            <TextField  type='submit' value={"Log In"} style={{width:"80%"}}  />
          </form>
        </div>
      </div>
       {/* aksaar77? elitarShin */}
    </div>
  )
}

export default Login
