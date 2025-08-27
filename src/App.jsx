//rafce
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlacesOrder from './pages/PlacedOrder/PlacesOrder'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { useContext } from 'react'
import { StoreContext } from './context/StoreContext'
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
   const { cartItems } = useContext(StoreContext);

   // Calculate total count
  const cartCount = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  return (
    <>
    {showLogin?<LoginPopup  setShowLogin={setShowLogin}/>:<></>} 
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlacesOrder />} />
        </Routes>

      </div>
      <Footer/>
    </>
  
  )
}

export default App
