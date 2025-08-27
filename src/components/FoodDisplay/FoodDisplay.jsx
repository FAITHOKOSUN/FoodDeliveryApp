import React, { useContext } from 'react'
import  './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    // Display food items based on the selected category
    // If category is ALL, display all items, otherwise filter by category
      <div className="food-display" id='food-display'>
        <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          console.log(category,item.category);
          // If category is ALL or matches the item's category, display the item
          if (category==='All' || category===item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>


      </div>
   
  )
}

export default FoodDisplay
