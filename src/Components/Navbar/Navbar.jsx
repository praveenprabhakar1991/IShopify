import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

import Ishop from './Assets/Ishop.png'
import cart from './Assets/cart.png'

const Navbar = () => {

   const { getTotalCartItems } = useContext(ShopContext)

   return <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
         <div className="container-fluid">
            <Link className="navbar-brand " to="#"><img src={Ishop} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item d-flex">
                     <Link to="/" className="nav-link mr-4">Shop</Link>
                     <Link to="/Mens" className="nav-link mx-4">Mens</Link>
                     <Link to="/Womens" className="nav-link mx-4">Womens</Link>
                     <Link to="/Kids" className="nav-link mx-4">Kids</Link>
                  </li>
               </ul>
               <div className='mr-5 mx-3'>
                  <Link to="/Login"><button type='submit' className='btn btn-white text-dark border text-black-50 rounded-pill px-4 mx-5' >Sign Up</button></Link>                 
                  
                  <Link to="/Cart"><img src={cart} /></Link>
                  <span className="position-absolute translate-middle badge rounded-pill bg-danger">{getTotalCartItems()}
                     <span className="visually-hidden">unread messages</span>
                  </span>
               </div>
            </div>
         </div>
      </nav>
   </>
}

export default Navbar
