import React from 'react'
import './styles.css'

function CartItem({ item, updateCart, removeFromCart }) {

    const handleChange = (e) => {
        const { value } = e.target;

        if( value <= item.stock && value > 0 ) {
        const newItem = item.amount = parseInt(e.target.value);
        updateCart(newItem);
        }

    }


    return (

        <div className="cart-item">

            <div className="cart-item-image">
                <img src={item.pictureUrl} alt="product" />
            </div>

            <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <label>

                    Cantidad: 
                    <input
                        className='cart-item-amount'
                        onChange={(e) => handleChange(e)}
                        type="number"
                        min="1"
                        value={item.amount}
                        max={item.stock} />

                </label>

                <span className="cart-item-delete" onClick={() => removeFromCart(item)}>Eliminar Producto</span>
            </div>

            <div className="cart-item-price">
                <h2>${item.price}</h2>
            </div>

        </div>
    )
}

export default CartItem