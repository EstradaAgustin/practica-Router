import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JournallPage } from '../pages/JournallPage'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='journal' element = {<JournallPage />} />
        {/* <Route path='/' element = {<JournallPage />} /> */}
        <Route path='/*' element = { <Navigate to={'/journal'} /> }  />
    </Routes>
  )
}
