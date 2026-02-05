import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {

     let [isLogin,setIsLogin] = useState(false);
    useEffect(()=>{
    setIsLogin(JSON.parse(localStorage.getItem("isLogin")));
    console.log(isLogin)
    },[])

    let NavLinks = [
        {
            name:"Feed",
            navigateTo:"/"
        },
        {
            name:"Account",
            navigateTo:"/account"
        },
        {
            name:"Profile",
            navigateTo:"/profile"
        }
    ]

  return (
    <nav className='px-8 py-4 bg-slate-200 shadow-2xl shadow-gray-200 flex items-center justify-between'>
        
        <h2 className='text-3xl font-bold text-red-500 italic' >Socialix</h2>

        <ul className='flex gap-4 ' >
            {
                NavLinks.map((item,index)=>{
                    if (item.name == "Profile") 
                    {
                        if(isLogin)
                        {
                            return <li key={index} ><Link to = {item.navigateTo} >{item.name}</Link></li>
                        }
                
                    }
                    else if(item.name == "Account")
                    {
                        if(!isLogin)
                        {
                            return <li key={index} ><Link to = {item.navigateTo} >{item.name}</Link></li>
                        }
                    }
                    else
                    {
                        return (
                            <li key={index} ><Link to = {item.navigateTo} >{item.name}</Link></li>
                        )
                    }
                })
            }
        </ul>

    </nav>
  )
}
