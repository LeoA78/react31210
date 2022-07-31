import CartItem from "../CartItem";
import './styles.css';
import { useContext } from "react";
import { context } from "../CartContext";
import { Link } from "react-router-dom";



function Cart() {

    const { getCart, getTotal, updateCart, removeFromCart } = useContext(context);

    if (getCart().length === 0) {
        return (
            <div className="alert-container">
                <div className="alert-message box">
                    <h2 className="alert-title">Tu carrito está vacío</h2>
                    <Link to='/' className="alert-subtitle">¿Por qué no echas un vistazo en la tienda?</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="cart-container">

            <div className="cart box">

                <div className="cart-header">
                    <h2>Carrito de Compras</h2>
                </div>

                <div className="cart-body">

                    {getCart().map(item => {
                        return (<CartItem key={item.id} item={item} updateCart={updateCart} removeFromCart={removeFromCart} />)
                    })}
                </div>

                <div className="cart-footer">
                    <h2>El Total es: ${getTotal()}</h2>
                    <Link className='buy-btn' to='/checkout'>Finalizar Compra</Link>
                </div>

            </div>

        </div>
    );
}

export default Cart;