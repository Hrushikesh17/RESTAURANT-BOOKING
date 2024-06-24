import React from 'react'
import Home from '../Home'
import { Route, Routes } from 'react-router-dom'
import AddItem from './AddItem'
import EditItem from './EditItem'
import ViewItem from '../ViewItem'
import SearchItem from '../SearchItem'

const AdminPortal = () => {
  return (
    <div>
     
      <Routes>
        <Route path='/add' element={<AddItem/>}/>
        <Route path='/edit/:id' element={<EditItem/>}/>
        <Route path='/view' element={<ViewItem/>}/>
        <Route path='/search' element={<SearchItem/>}/>
      </Routes>
      <Home/>
    </div>
  )
}

export default AdminPortal
