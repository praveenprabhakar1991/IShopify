import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

import starIcon from '../Assets Copy/star_icon.png'
import starDullIcon from '../Assets Copy/star_dull_icon.png'

const ProductDisplay = (props) => {

   const { Product } = props
   const {addToCart} = useContext(ShopContext)

   return <div>
      <div className="container">
         <div className="row">
            {/* Left-Side */}
            {/* <div className="col-md-1">
               <div className="card mt-3">
                  <img src={Product.Image} className="card-img-top" />
               </div>
               <div className="card mt-4">
                  <img src={Product.Image} className="card-img-top" />
               </div>
               <div className="card mt-4">
                  <img src={Product.Image} className="card-img-top" />
               </div>
               <div className="card mt-4">
                  <img src={Product.Image} className="card-img-top" />
               </div>
               <div className="card mt-4">
                  <img src={Product.Image} className="card-img-top" />
               </div>
            </div> */}
            <div className="col-md-6 mt-3">
               <div className="card">
                  <img src={Product.Image} className="card-img-top" />
               </div>
            </div>
            {/* Right-Side */}
            <div className="col-md-6 mt-3">
               <h1 className='text-capitalize ml-5'>{Product.Name}</h1>
               <div className='ml-5'>
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starDullIcon} />
                  <h6 className='mt-2'>369</h6>
               </div>
               <div className='mt-3 ml-5'>
                  <p className='fs-6'>Extend your wardrobe collection with the stylish range of clothing from JK TRADER. Each piece of the garment from the house of JK TRADER is crafted using the finest quality of materials to give you a comfortable wearing experience and voguish appearance. So spike up your dressing appeal and look beautiful with JK TRADER.</p>
               </div>
               <div className='mt-3 d-flex ml-5'>
                  <h6 className='text-danger mr-5'><strong>Rs. {Product.NewPrice} /-</strong></h6>
                  <h6><del className='text-muted'> Rs. {Product.OldPrice} /-</del></h6>
               </div>
                  <h2 className='mt-3 ml-5 '>Select Size</h2>
               <div className='mt-5 d-flex justify-content-evenly'>
                  <button className='btn btn-light border' style={{height:"50px", width:"50px"}}><h5>S</h5></button>
                  <button className='btn btn-light border' style={{height:"50px", width:"50px"}}><h5>M</h5></button>
                  <button className='btn btn-light border' style={{height:"50px", width:"50px"}}><h5>L</h5></button>
                  <button className='btn btn-light border' style={{height:"50px", width:"50px"}}><h5>XL</h5></button>               
               </div>
               <div className='mt-5 ml-5'>
                 <button type='submit' className="btn btn-danger rounded-pill py-2 px-3 mt-3" onClick={()=>{addToCart(Product.id)}}>ADD TO CART</button>            
               </div>
               <div className='mt-5 ml-5'>
                  <h6 className='text-capitalize'><strong>Category :</strong> {Product.category}, {Product.Pattern}</h6>
                  <h6><strong>Tags :</strong> Modern, Latest, Trendy</h6>                  
               </div>
            </div>
         </div>
      </div>
   </div>
}

export default ProductDisplay
