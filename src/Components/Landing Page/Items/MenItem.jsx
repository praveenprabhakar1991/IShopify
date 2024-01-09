import { Link } from 'react-router-dom'
import Datas from '../MensData'

const MenItem = () => {
   return <div className="container mt-3 min-vh-100">
      <div className='text-center'>
         <h3 className='text-muted'>POPULAR IN MEN</h3>
         <hr className='mx-auto' style={{ width: "200px", height: "2px" }} />
      </div>
      <div className="row">
         {Datas.map((Datas) => {
            return <div className="col-md-3 mt-3" key={Datas.id}>
               <div className="card">
                  <Link to={`/Product/${Datas.id}`}><img src={Datas.Image} className="card-img-top" alt={Datas.Name} onClick={() => { window.scrollTo(0, 0) }} /></Link> <hr />
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
}

export default MenItem
