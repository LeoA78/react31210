import './styles.css';
import {  useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { serverTimestamp } from 'firebase/firestore';
import { checkout } from '../../firebase/firebase';
import { clearCart } from '../../store/slices/cart/cartSlice';



function Checkout() {

    const { cart, total} = useSelector(state => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [buyer, setBuyer] = useState({
        name: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
    });

    const [stateSales, setStateSales] = useState('');
    const [activeButton, setActiveButton] = useState(false);


    useEffect(() => {
       verifyBuyer(buyer) ? setActiveButton(true) : setActiveButton(false);
    }, [buyer])



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!verifyemail(buyer)) {
            setStateSales('Las direcciones de correo no coinciden');
            return;
        }

        if (verifyBuyer(buyer)) {
            const order = {
                buyer: buyer,
                products: cart,
                total: total,
                date: serverTimestamp()
            }
            checkout('sales', order)
                .then(res => {
                    setStateSales(`Gracias por realizar la compra. Su identificador es ${res.id}. Serás redireccionado en 15 segundos`);
                    setActiveButton(false)
                }).finally(() => {

                    setTimeout(() => {
                        navigate('/');
                        dispatch(clearCart());
                    }, 15000);<stroge></stroge>
                })

        } else {
            setStateSales('Por favor, complete todos los campos');
        }
    }

    const verifyBuyer = (buyer) => {
        let verify = true;

        Object.values(buyer).forEach(value => {
            if (value.trim() === '') {
                verify = false;
            }
        });

        return verify;
    }

    const verifyemail = (buyer) => {
        return buyer.email === buyer.verifyEmail;
    };


    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };


    if (cart.length === 0) {
        return (
            <div className="checkout-container">
                <div className="checkout-empty box">
                    <h2 className="checkout-empty-title">Tu carrito está vacío</h2>
                    <Link to='/' className="checkout-empty-subtitle">¿Por qué no echas un vistazo en la tienda?</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="checkout-container">

            <div className="checkout box">

                <div className="checkout-header">
                    <h2>Datos de Cliente</h2>
                </div>

                <div className="checkout-body">
                    <form action="">
                        <input onChange={handleInputChange} type="text" name="name" placeholder="Nombre" />
                        <input onChange={handleInputChange} type="text" name="lastName" placeholder="Apellido" />
                        <input onChange={handleInputChange} type="tel" name="phone" placeholder="Teléfono" />
                        <input onChange={handleInputChange} type="text" name="address" placeholder="Dirección" />
                        <input onChange={handleInputChange} type="mail" name="email" placeholder="Correo Electrónico" />
                        <input onChange={handleInputChange} type="mail" name="verifyEmail" placeholder="Verifica tu Correo Electrónico" />
                        {activeButton && <button className='buy-btn' onClick={(e) => handleSubmit(e)}>Realizar Compra</button>}
                    </form>
                </div>

                <div className="checkout-footer">
                    <h3>Total de Compra: ${total}</h3>
                    {stateSales && <span>{stateSales}</span>}
                </div>

            </div>

        </div>
    );
}

export default Checkout;