import React from 'react'
import Home from './Home'

import Contact from './Contact'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import FormFunctionComp from './FormFunctionComp'
import { Store } from '../../store'
import { useState } from 'react'
import Create from './Create'

const RouteCom = () => {
  const [studData,setStudData]= useState(
   [ {
   
    name:'Amit',
    age:23,
    batch:'44',
    course:'Mern',

  },  {
  
    name:'Rahul',
    age:24,
    batch:'13',
    course:'Mern',

  }, {
   
    name:'Shubham',
    age:25,
    batch:'13',
    course:'Mern',

  }

]
  )
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
       <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/student' element={
       <Store.Provider value={{data:studData,setData:setStudData}}>

              <FormFunctionComp/>
              </Store.Provider>

            }/>
            <Route path='student/create' element={
              <Store.Provider value={{data:studData,setData:setStudData}}>

              <Create update={false} />
              </Store.Provider>
            }/>
            <Route path='student/update/:id' element={
              <Store.Provider value={{data:studData,setData:setStudData}}>
              <Create update={true}/>
            </Store.Provider>
            }
              />

            <Route path='/contact' element={<Contact/>}/>


       </Routes>
       <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default RouteCom