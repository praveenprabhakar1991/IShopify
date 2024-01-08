import img3 from './Assets/img3.jpg'
// import { Link } from 'react-router-dom'

const LandingPage3 = () => {
   return <div className=" container mt-5 pt-5">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
               <img src={img3} className="d-block w-100" />
            </div>
            {/* <div className="carousel-caption d-inline d-md-block">
               <h3 className='text-warning'>EXCLUSIVE OFFER FOR YOU</h3>
               <Link to="/"><button className='border-0 bg-transparent mt-3'><span className=" fs-6 fw-normal badge rounded-pill bg-danger py-3 px-4 text-white">CLick Me</span></button></Link>
            </div> */}
         </div>
      </div>
   </div>
}

export default LandingPage3
