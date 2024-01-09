import img1 from './Assets/img1.png'
// import { Link } from 'react-router-dom'

const LandingPage = () => {
   return <div className="container mt-3">      
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
               <img src={img1} className="d-block w-100 img-fluid" alt='LandingPage1' />
            </div>
            {/* <div className="carousel-caption ">
               <h3>NEW ARRIVALS ONLY</h3>
               <Link to="/"><button type='submit' className='btn btn-dark border rounded-pill py-2 px-5 m-3'>Submit</button></Link>
            </div> */}
         </div>
      </div>
   </div>
}

export default LandingPage
