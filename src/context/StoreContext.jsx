import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";
// This file creates a context for the store, which will be used to manage the state of the food items and the cart.
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeFromCart = (itemId) => {

        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    );
};
export default StoreContextProvider;