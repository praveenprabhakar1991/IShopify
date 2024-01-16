import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import MensBanner from './Components/Assets/Mens Banner.png'
import WomensBanner from './Components/Assets/Womens Banner.png'
import KidsBanner from './Components/Assets/Kids Banner.png'


const App = () => {
  return <>
    <Router>
      < Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/Womens' element={<ShopCategory banner={WomensBanner} category="women" />} />
        <Route path='/Mens' element={<ShopCategory banner={MensBanner} category="men" />} />
        <Route path='/Kids' element={<ShopCategory banner={KidsBanner} category="kid" />} />
        <Route path='/Product/:ProductId' element={<Product />}/>      
        <Route path='/Login' element={<LoginSignup />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
      < Footer />
    </Router>
  </>
}

export default App
