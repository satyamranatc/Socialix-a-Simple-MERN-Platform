import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

export default function Account() {
  let navigate = useNavigate();
    let isLogin;

  useEffect(()=>{
    isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin)
    {
        navigate("/profile");
    }
  },[])



    async function handleLogin(e)
    {

        e.preventDefault();
        let email = e.target.email.value;

        let res = await axios.post("http://localhost:5000/api/user/login",{email});

        if (res.data.err)
        {
            alert(res.data.err);
            return;
        }
        console.log(res.data)
        localStorage.setItem("user",JSON.stringify(res.data));
        localStorage.setItem("isLogin",true);
        navigate("/profile");


    }

  return (
    <div>
      
      <div id="FormPage" className='m-auto mt-16 p-40 bg-slate-200 rouded flex items-center justify-center flex-col w-fit' >
        <form onSubmit={handleLogin} >
            <label className='text-xl font-bold text-black' >
                Type Your Email:
                <input name = "email" className='px-6 py-2 w-[250px] rounded-2xl border block' type="text" placeholder='email...' />
                <button>Login</button>
            </label>
        </form>
      </div> 
      
    </div>
  )
}
