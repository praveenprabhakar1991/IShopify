import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

const ShopCategory = (props) => {

   const { AllProducts } = useContext(ShopContext)

   return <>
      <div className='container mt-3'>
         <img src={props.banner} className='img-fluid' alt="Category Banner" />
         <div className='mt-5 d-flex justify-content-around'>
            <p><strong>Showing 1-12</strong> out of 36 Products</p>
            <div className="dropdown">
               <button className="border-0 bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span type='submit' className='btn btn-white border rounded-pill py-1 px-3 text-black-50 dropdown-toggle'>Sort by</span>
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" to="/Womens">Womens</Link></li>
                  <hr />
                  <li><Link className="dropdown-item" to="/Mens">Mens</Link></li>
                  <hr />
                  <li><Link className="dropdown-item" to="/Kids">Kids</Link></li>
               </ul>
            </div>
         </div>
         <div>
            <div className="row">
               {
                  AllProducts.map((Datas) => {
                     if (props.category === Datas.category) {
                        return <div className="col-md-3 mt-5" key={Datas.id}>
                           <div className="card">
                              <Link to={`/Product/${Datas.id}`}><img src={Datas.Image} className="card-img-top" onClick={() => { window.scrollTo(0, 0) }} /></Link> <hr />
                              <h6 className='mx-2'><strong>{Datas.Name}</strong></h6>
                              <div className='text-center d-flex'>
                                 <strong className='mr-5 mx-2'>Rs. {Datas.NewPrice} /-</strong>
                                 <span>Rs. <del className='text-muted'>{Datas.OldPrice} /-</del></span>
                              </div>
                           </div>
                        </div>
                     }
                     else {
                        return null
                     }
                  })
               }
               <div className='mt-5 pt-5 text-center'>
                  <Link to="/"><button type='submit' className='btn btn-dark rounded-pill py-2 px-4 '>Explore More...</button></Link>
               </div>
            </div>
         </div>
      </div>
   </>
}

export default ShopCategory
