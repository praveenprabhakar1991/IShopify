import { Link } from 'react-router-dom'
import Ishopify from '../Navbar/Assets/Ishopify.png'

const Footer = () => {
   return <div>
      <div className="container mt-5 pt-5">
         <div className="row text-center">
            <div className="col-md-6 mx-auto">
               <img src={Ishopify} />
               <div>
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                     <div className="nav-item d-flex justify-content-around">
                        <li>Company</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Contact</li>
                     </div>
                  </ul>
               </div>
               <div className='mt-5 d-flex justify-content-around'>
                  <Link to="https://www.instagram.com/praveen_prabhakar_/" target='_blank' rel="noreferrer"><h3><i className="fa-brands fa-instagram text-dark"></i></h3></Link>
                  <Link to="https://www.linkedin.com/in/praveen-prabhakar-147631212/" target='_blank' rel="noreferrer"><h3><i className="fa-brands fa-linkedin text-dark"></i></h3></Link>
                  <Link to="https://github.com/praveenprabhakar1991" target='_blank' rel="noreferrer"><h3><i className="fa-brands fa-github text-dark"></i></h3></Link>
                  <Link to="https://www.youtube.com/@mindhazzel-relaxationmusic832" target='_blank' rel="noreferrer"><h3><i className="fa-brands fa-youtube text-dark"></i></h3></Link>
               </div>
            </div>
         </div>
      </div>
      <div className='text-center text-muted'>
         <hr className='mt-5' />
         <h6 className='mt-5'>Copyright @ 2024 - All Rights Reserved.</h6>
      </div>
   </div>
}

export default Footer
