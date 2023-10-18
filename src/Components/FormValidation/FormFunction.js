import React from 'react'

const FormFunction = () => {
  return (
    <>
    <div className='container'>
    <form action="" className='formClass'>
        <div className="form-valid">
        <div className="labels">
       <label htmlFor="">Name</label>
        <label htmlFor="">Email</label>
        <label htmlFor="">Ratings</label>
       </div>


       <div className="inputs">
       <input type="text" placeholder='Enter your name'/>
       <input type="text" placeholder='Enter your email'/>
       <input type="number" placeholder='Enter your ratings'/>

       </div>
        </div>
       
       <input type="submit" value="Submit" className='submit'/>

    </form>
    </div>
    
    
    
    </>
  )
}

export default FormFunction