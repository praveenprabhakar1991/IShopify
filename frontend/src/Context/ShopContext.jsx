import React, { createContext, useState } from 'react'
import AllProducts from '../Components/Assets/AllProducts.js'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
   let cart = {}
   for (let index = 0; index < AllProducts.length + 1; index++) {
      cart[index] = 0
   }
   return cart
}

const ShopContextProvider = (props) => {

   const [cartItems, setCartItems] = useState(getDefaultCart())

   const addToCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
   }

   const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
   }

   const getTotalCartAmount = () => {
      let totalAmount = 0
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            let itemInfo = AllProducts.find((Product) => Product.id === Number(item))
            totalAmount += cartItems[item] * itemInfo.NewPrice
         }
      }
      return totalAmount
   }

   const getTotalCartItems = () => {
      let totalItem = 0
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            totalItem += cartItems[item]
         }
      }
      return totalItem
   }

   const contextValue = { getTotalCartItems, getTotalCartAmount, AllProducts, cartItems, addToCart, removeFromCart }

   return <div>
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   </div>
}

export default ShopContextProvider
