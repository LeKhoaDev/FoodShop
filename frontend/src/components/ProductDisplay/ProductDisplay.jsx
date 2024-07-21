/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import '../ProductDisplay/ProductDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const FooDisplay = ({ category }) => {

    const { product_list } = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top products near you</h2>
            <div className="food-display-list">
                {product_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FooDisplay
