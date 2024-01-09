import img2 from './Assets/img2.png'
// import { Link } from 'react-router-dom'

const LandingPage2 = () => {
   return <div className="container mt-5">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
               <img src={img2} className="d-block w-100" alt='LandingPage2' />
            </div>
            {/* <div className="carousel-caption d-inline d-md-block">
               <h3>NEW COLLECTIONS FOR EVERYONE</h3>
               <Link to="/"><button className='border-0 bg-transparent mt-3'><span className=" fs-6 fw-normal badge rounded-pill bg-danger py-3 px-4 text-white">Check Now</span></button></Link>
            </div> */}
         </div>
      </div>      
   </div>
}

export default LandingPage2
