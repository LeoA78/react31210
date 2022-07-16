import React from 'react'
import './styles.css'

function CartItem({ item }) {
    console.log('Este es el  stock ->',item.stock);
    return (
        
        <div className="cart-item">

            <div className="cart-item-image">
                <img src={item.pictureUrl} alt="product" />
            </div>

            <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Cantidad: {item.amount}</p>
            </div>

            <div className="cart-item-price">
                <h2>${item.price}</h2>
            </div>

        </div>
    )
}

export default CartItem