import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
   
   const { getTotalCartAmount,AllProducts, cartItems, removeFromCart } = useContext(ShopContext)

   return <div>
      <div className="container">
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Remove</th>
               </tr>
            </thead>
            <tbody >
               {AllProducts.map((e) => {
                  if (cartItems[e.id] > 0) {
                     return <tr key={e.id} >
                        <td scope="col"><img src={e.Image} className='card-img-top' style={{ height: "200px", width: "200px" }} /></td>
                        <td scope="col">{e.Name}</td>
                        <td scope="col">{e.NewPrice} /-</td>
                        <td scope="col">{cartItems[e.id]}</td>
                        <td scope="col">{e.NewPrice * cartItems[e.id]} /-</td>
                        <td scope="col"><i className="fa fa-trash" aria-hidden="true" onClick={() => { removeFromCart(e.id) }} ></i></td>
                     </tr>
                  }
                  return null
               })
               }
            </tbody>
         </table>
         <div className="row">            
               <div className="col-md-6 mt-5">
                  <h2>Cart Totals</h2>
                  <div className="mt-5">
                     <div className='d-flex justify-content-between'>
                        <p>Sub Total</p>
                        <p>Rs. {getTotalCartAmount()} /-</p>
                     </div> <hr />
                     <div className='d-flex justify-content-between'>
                        <p>Shipping Fee</p>
                        <p>Free /-</p>
                     </div> <hr />
                     <div className='d-flex justify-content-between'>
                        <h2>Total</h2>
                        <h5>Rs. {getTotalCartAmount()} /-</h5>
                     </div>
                  </div>
                  <button type='submit' className='btn btn-danger rounded-pill py-2 px-3 mt-3'>PROCEED TO CHECKOUT</button>
               </div>
               <div className="col-md-6 mt-5 text-center px-5">
                  <p>If You Have A PromoCode, Enter it Here</p>
                  <div className='mt-5 d-flex justify-content-center'>
                  <input type="text" className='form-control border rounded-pill mx-3' placeholder='PromoCode' />
                     <button type='submit' className='btn btn-dark rounded-pill px-4 shadow-sm'>Submit</button>
                  </div>
               </div>            
         </div>
      </div>
   </div>
}

export default CartItems
