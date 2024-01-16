import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb'
import ProductDisplay from '../Components/Product Display/ProductDisplay'
import DescriptionBox from '../Components/Description Box/DescriptionBox'


const Product = () => {
   const { AllProducts } = useContext(ShopContext)
   const { ProductId } = useParams()
   const Product = AllProducts.find((e) => e.id === Number(ProductId))
   return <div>
      <Breadcrumb Product={Product} />  
      < ProductDisplay Product={Product} />   
      < DescriptionBox />
   </div>
}

export default Product
