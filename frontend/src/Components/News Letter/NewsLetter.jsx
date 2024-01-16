import React from 'react'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
   return <div className="mt-5 text-center">
      <div className="row justify-content-center">
         <h4>Get Exclusive Offers On Your Email</h4>
         <div className="col-md-3">
            <div className='m-3'>
            <input type="text" className='form-control border rounded-pill' placeholder='Enter Your Name' />
            </div>
            <div className='m-3'>
               <input type="email" className='form-control border rounded-pill' placeholder='Enter Your Email' />
            </div>
            <Link to="/"><button type='submit' className='btn btn-dark border rounded-pill py-2 px-4 m-3'>Submit</button></Link>
         </div>
      </div>
   </div>
}

export default NewsLetter
