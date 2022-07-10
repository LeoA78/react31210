import './styles.css';
import ItemCount from '../ItemCount';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../CartContext';

function ItemDetail({ item }) {
    const [amount, setAmount] = useState(1);
    const [visibleCounter, setVisibleCounter] = useState(true);
    const { addToCart } = useContext(context);

    const onAdd = (qty) => {
        setVisibleCounter(false);
        addToCart({...item, amount: qty});
    }

    const modifyAmount = (value) => {
        const result = amount + value;

        if(result <= item.stock && result >=1){
           setAmount(amount + value);
        }
    }

    return (

        <section className='detail-content box'>
            <div className='detail-image'>
                <img src={item.pictureUrl} alt="" />
            </div>
            <div className='detail-box'>
                <div className='detail'>
                    <h2 className='detail-title'>{item.title}</h2>
                    <p className='detail-description'>{item.description}</p>
                    <p className='detail-price'>${item.price}</p>
                </div>

                {visibleCounter ? <ItemCount onAdd={onAdd} modifyAmount={modifyAmount} amount={amount} stock={item.stock}/> : <button className='buy-btn'><Link to='/cart'>Comprar Ahora</Link></button>}
            
                
            </div>
        </section>

    );
}

export default ItemDetail;