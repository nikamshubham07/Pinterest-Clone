import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SinglePost from './pages/SinglePost';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signlePost/:id' element={<SinglePost/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
