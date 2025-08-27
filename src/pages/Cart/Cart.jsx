import React from 'react'
import './Cart.css'
import { useNavbar } from '../../hooks/Navbar.hook';

const Cart = () => {
       const {currentPage}=useNavbar();
  
  return (
    <div>
      {currentPage}
    </div>
  )
}

export default Cart
