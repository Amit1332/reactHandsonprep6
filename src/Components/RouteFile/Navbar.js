import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <div className="head" style={{display:"flex",justifyContent:"space-around",alignItems:"center", padding:"5px 0px"}}>
        <div className="box1">
        <Link to='/'>Home</Link>
        </div>
        <div className="box1">
      <Link to='/student'>Student</Link>
        </div> <div className="box1">
      <Link to='/contact'>Contact</Link>
        </div>
    </div>

    </>
  )
}

export default Navbar