import React,{useState} from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx';
import Feed from './pages/Feed.jsx';
import Profile from './pages/Profile.jsx';
import Account from './pages/Account.jsx';

export default function App() {

  

  return (
    <div>

    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/profile" element={<Profile  />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}
