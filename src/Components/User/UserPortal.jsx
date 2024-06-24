import React from 'react'
import Home from '../Home'
import { Route, Routes } from 'react-router-dom'
import ViewItem from '../ViewItem'
import SearchItem from '../SearchItem'
import Contact from './Contact'

const UserPortal = () => {
  return (
    <div>
        <Home/>
      <Routes>
      <Route path='/view' element={<ViewItem/>}/>
      <Route path='/Search' element={<SearchItem/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  )
}

export default UserPortal
