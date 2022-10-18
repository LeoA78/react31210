import './styles.css';
import ItemCount from '../ItemCount';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addToCart } from "../../store/slices/cart/cartSlice";

function ItemDetail({ item }) {
    const [amount, setAmount] = useState(1);
    const [visibleCounter, setVisibleCounter] = useState(true);
    const [existProduct, setExistProduct] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {

        if (item.length === 0) {
            setExistProduct(false);
        }

    }, [item])


    const onAdd = (qty) => {
        setVisibleCounter(false);
        dispatch(addToCart({ ...item, amount: qty }))
    }

    const modifyAmount = (value) => {
        const result = amount + value;

        if (result <= item.stock && result >= 1) {
            setAmount(amount + value);
        }
    }
    if (!existProduct) {
        return (

            <div className="alert-container">
                <div className="alert-message box">
                    <h2 className="alert-title">Producto no encontrado</h2>
                    <Link to='/' className="alert-subtitle">¿Por qué no echas un vistazo en la tienda?</Link>
                </div>
            </div>
        )

    }

    return (

        <section className='detail-content box'>
            <div className='detail-image'>
                <img src={item.imageUrl} alt="" />
            </div>
            <div className='detail-box'>
                <div className='detail'>
                    <h2 className='detail-title'>{item.name}</h2>
                    <p className='detail-description'>{item.description}</p>
                    <p className='detail-price'>${item.unitPrice}</p>
                </div>

                {
                visibleCounter 
                ? <ItemCount onAdd={onAdd} modifyAmount={modifyAmount} amount={amount} stock={item.stock} /> 
                : <button className='buy-btn'><Link to='/cart'>Comprar Ahora</Link></button>
                }


            </div>
        </section>

    );
}

export default ItemDetail;