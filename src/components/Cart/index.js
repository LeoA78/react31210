import CartItem from "../CartItem";
import './styles.css';
import { useContext } from "react";
import { context } from "../CartContext";



function Cart() {

    const { getCart, getTotal } = useContext(context);

    return (
        <div className="cart-container">

            <div className="cart box">

                <div className="cart-header">
                    <h2>Carrito de Compras</h2>
                </div>

                <div className="cart-body">
 
                    { getCart().map( item => {
                        return (<CartItem key={item.id} item={item} />)
                    })} 
                </div>

                <div className="cart-footer">
                    <h2>El Total es: ${ getTotal() }</h2>
                </div>
            </div>

        </div>
    );
}

export default Cart;