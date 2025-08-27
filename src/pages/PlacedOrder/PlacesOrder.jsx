import React from 'react'
import './PlacesOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlacesOrder = () => {
  const { getTotalCartAmount } = React.useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Info:</p>
        
        <div className="multi-fields">
          {/* <label htmlFor="firstname">Name:</label> */}
          <input type="text" name="firstname" id="firstname" placeholder="First Name" />
          <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
        </div>
        
        <div className="multi-fields">
          {/* <label htmlFor="phone">Phone Number:</label> */}
          <input type="text" name="phone" id="phone" placeholder="Phone Number" />
        </div>
        
        <div className="multi-fields">
          {/* <label htmlFor="email">Email:</label> */}
          <input type="email" name="email" id="email" placeholder="Email Address" />
        </div>
        
        <div className="multi-fields">
          {/* <label htmlFor="address">Address:</label> */}
          <input type="text" name="address" id="address" placeholder="Street Address" />
          <input type="text" name="city" id="city" placeholder="City" />
          <input type="text" name="postalcode" id="postalcode" placeholder="Postal Code" />
        </div>
        
      </div>
      
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
           <div className="cart-total-details">
              <p>Subtotal</p>
              <p>£{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>£{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>£{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlacesOrder