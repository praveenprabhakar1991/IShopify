import React from 'react'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
   return <div className='container mt-3'>
      <div className="row justify-content-center">
         <div className="col-md-4">
            <h2>Sign Up</h2>
            <i className='text-muted'>Fill in this form to create an account.</i>
            <div className='flex-column mt-3 align-items-center'>
               <input type="text" className='form-control border rounded-pill mt-3' placeholder='Enter Name' />
               <input type="email" className='form-control border rounded-pill mt-3' placeholder='Enter Email' />
               <input type="password" className='form-control border rounded-pill mt-3' placeholder='Enter Password' />
               <input type="password" className='form-control border rounded-pill mt-3' placeholder='Repeat Password' />
            </div>            
            <p className='mt-3'>Already Having Account? <span className='text-danger'>Login Here</span></p>
            <div className="form-check">
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               <label className="form-check-label">
                  By Continuing, I agree to the trems of use and privacy policy
               </label>
            </div>
            <Link to="/"><button type='submit' className='btn btn-danger rounded-pill py-2 px-5 mt-3'>Submit</button></Link>
         </div>
      </div>
   </div >
}

export default LoginSignup
