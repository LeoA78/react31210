import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../store/slices/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;

    if (value <= item.stock && value > 0) {

      const newItem = { ...item, amount: parseInt(value)};
      dispatch(updateCart(newItem));
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.imageUrl} alt="product" />
      </div>

      <div className="cart-item-details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>

        <label>
          Cantidad:
          <input
            className="cart-item-amount"
            onChange={(e) => handleChange(e)}
            type="number"
            min="1"
            value={item.amount}
            max={item.stock}
          />
        </label>

        <span
          className="cart-item-delete"
          onClick={() => dispatch(removeFromCart(item))}
        >
          Eliminar Producto
        </span>
      </div>

      <div className="cart-item-price">
        <h2>${item.unitPrice * item.amount}</h2>
      </div>
    </div>
  );
}

export default CartItem;
