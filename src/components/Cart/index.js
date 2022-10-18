import CartItem from "../CartItem";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Cart() {
  const { cart, total } = useSelector((state) => state.cart);
  const { isLogged } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {

    if(!isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate]);
 


  if (cart.length === 0) {
    return (
      <div className="alert-container">
        <div className="alert-message box">
          <h2 className="alert-title">Tu carrito está vacío</h2>
          <Link to="/" className="alert-subtitle">
            ¿Por qué no echas un vistazo en la tienda?
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="cart-container">
      <div className="cart box">
        <div className="cart-header">
          <h2>Carrito de Compras</h2>
        </div>

        <div className="cart-body">
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>

        <div className="cart-footer">
          <h2>El Total es: ${total}</h2>
          <Link className="buy-btn" to="/checkout">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
