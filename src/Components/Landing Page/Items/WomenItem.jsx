import { Link } from 'react-router-dom'
import Datas from '../WomensDatas'

const WomenItem = () => {
   return <div>
      <div className="container mt-5 min-vh-100">
         <div className='text-center '>
            <h2 className='text-muted'>POPULAR IN WOMEN</h2>
         <hr className='mx-auto' style={{ width: "250px", height: "2px" }} />
         </div>
         <div className="row">
            {
               Datas.map((Datas) => {
                  return <div className="col-md-3 mt-5" key={Datas.id}>
                     <div className="card">
                        <Link to={`/Product/${Datas.id}`}><img src={Datas.Image} className="card-img-top hover-focus" onClick={window.scrollTo(0, 0)} /></Link> <hr />
                        <h6 className='mx-2'><strong>{Datas.Name}</strong></h6>
                        <div className='text-center d-flex'>
                           <strong className='mr-5 mx-2'>Rs. {Datas.NewPrice} /-</strong>
                           <span><del className='text-muted'>Rs. {Datas.OldPrice} /-</del></span>
                        </div>
                     </div>
                  </div>
               })
            }
         </div>
      </div>
   </div>
}

export default WomenItem
