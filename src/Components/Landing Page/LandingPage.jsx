import img1 from './Assets/img1.png'
// import { Link } from 'react-router-dom'

const LandingPage = () => {
   return <div className="container">      
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
               <img src={img1} className="d-block w-100" />
            </div>
            {/* <div className="carousel-caption d-inline d-md-block">
               <h3>NEW ARRIVALS ONLY</h3>
               <Link to="/"><button className='border-0 bg-transparent mt-3'><span className=" fs-6 fw-normal badge rounded-pill bg-danger py-3 px-4 text-white ">Latest Collections</span></button></Link>
            </div> */}
         </div>
      </div>
   </div>
}

export default LandingPage
