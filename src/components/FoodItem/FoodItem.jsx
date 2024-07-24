import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({ item }) => {

    
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);


  return (
    <div className='food-item'>
        <div className="food-item-img-container"> 
          <img className='food-item-image' src={item.image} alt='' />
          { !cartItems[item._id]
            ? <img className='add' onClick={()=> addToCart(item._id)} src={assets.add_icon_white} alt='' />
            : <div className='food-item-counter'>
                <img src={assets.remove_icon_red} onClick={()=> removeFromCart(item._id)}/>
                <p>{cartItems[item._id]}</p>
                <img src={assets.add_icon_green} onClick={()=> addToCart(item._id)}/>
              </div>
          }
          {/* { !cartItems[id]
          ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt='' />
          : <div className='food-item-count'>
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} />
                <p>{cartItems[id]}</p>
                <img onClick={()=> addToCart(id)} src={assets.add_icon_green} />
            </div>
          } */}
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{item.name}</p>
                <img src={assets.rating_starts} alt='' />
            </div>
            <p className="food-item-desc">{item.description}</p>
            <p className="food-item-price">${item.price}</p>
        </div>
    </div>
  )
}

export default FoodItem;