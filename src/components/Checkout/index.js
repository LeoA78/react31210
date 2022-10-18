import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { createOrderDB } from "../../store/slices/order/thunks";
import { Link } from "react-router-dom";

function Checkout() {
  const { cart, total } = useSelector((state) => state.cart);
  const { user, isLogged } = useSelector((state) => state.user);
  const { message, order } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
      return;
    }


  }, [isLogged, navigate, dispatch, message]);

  const generateOrder = async () => {
    const cartDetail = cart.map((item) => {
      return {
        productId: item.id,
        quantity: item.amount,
      };
    });

    const order = {
      userEmail: user.email,
      cart: cartDetail,
    };

    dispatch(createOrderDB(order));
  };

  
  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <div className="checkout-empty box">
          <h2 className="checkout-empty-title">Tu carrito está vacío</h2>
          <Link to="/" className="checkout-empty-subtitle">
            ¿Por qué no echas un vistazo en la tienda?
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="checkout-container">
      <div className="checkout box">
        <div className="checkout-header">
          <h2>Datos de Envío</h2>
        </div>

        <div className="checkout-body">
          <div className="detail">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={user.name}
              readOnly={true}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={user.lastName}
              readOnly={true}
            />
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              value={`Calle: ${user.address.street}, Nº: ${
                user.address.streetNumber
              }. ${
                user.address.apartment ? `Piso: ${user.address.apartment}` : ""
              }`}
              readOnly={true}
            />
            <input
              type="mail"
              name="email"
              placeholder="Correo Electrónico"
              value={user.email}
              readOnly={true}
            />

            <Typography
              component="h6"
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1.5rem", marginY: "1rem" }}
            >
              {message && (
                <Alert severity={message.type}>{message.detail}</Alert>
              )}
            </Typography>

            {!order && (
              <button className="buy-btn" onClick={generateOrder}>
                Realizar Compra
              </button>
            )}
          </div>
        </div>

        <div className="checkout-footer">
          {!order ? (
            <h3>Total de Compra: ${total}</h3>
          ) : (
            <>
              <p>
                ¡Gracias por comprar! Recibirás un mail con los datos de
                facturación y el detalle de tu orden de compra.
              </p>
              <p>Te redireccionaremos a la página principal en 30 segundos</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
