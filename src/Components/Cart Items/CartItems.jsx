import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {

   const { getTotalCartAmount, AllProducts, cartItems, removeFromCart } = useContext(ShopContext)

   return <div>
      <div className="container mt-3">
         <table className="table table-responsive">
            <thead>
               <tr>
                  <th>Products</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
               </tr>
            </thead>
            <tbody >               
               {AllProducts.map((e) => {
                  if (cartItems[e.id] > 0) {
                     return <tr key={e.id} > 
                        <td><img src={e.Image} className='card-img-top' style={{ height: "150px", width: "150px" }} /></td>
                        <td>{e.Name}</td>
                        <td>{e.NewPrice}</td>
                        <td>{cartItems[e.id]}</td>
                        <td>{e.NewPrice * cartItems[e.id]} /-</td>
                        <td><i className="fa fa-trash" aria-hidden="true" onClick={() => { removeFromCart(e.id) }} ></i></td>
                     </tr>                     
                  }
                  return null
               })
               }
            </tbody>
         </table>
         <div className="row">
            <div className="col-md-6 mt-5">
               <h3>Cart Totals</h3>
               <div className="mt-5">
                  <div className='d-flex justify-content-between'>
                     <p>Sub Total</p>
                     <p>Rs. {getTotalCartAmount()} /-</p>
                  </div> 
                  <div className='d-flex justify-content-between'>
                     <p>Shipping Fee</p>
                     <p>Free /-</p>
                  </div> <hr />
                  <div className='d-flex justify-content-between'>
                     <h3>Total</h3>
                     <h5>Rs. {getTotalCartAmount()} /-</h5>
                  </div>
               </div>
               <div>
               <button type='submit' className='btn btn-danger rounded-pill py-2 mt-5'>PROCEED TO CHECKOUT</button>
               </div>
            </div>
            <div className="col-md-6 mt-5 text-center">
               <h6>If You Have A PromoCode, Enter it Here</h6>
               <div className='mt-3 d-flex'>
                  <input type="text" className='form-control border rounded-pill mx-3' placeholder=' Apply PromoCode' />
                  <button type='submit' className='btn btn-dark rounded-pill px-4 shadow-sm'>Submit</button>
               </div>
            </div>
         </div>
      </div>
   </div>
}

export default CartItems
