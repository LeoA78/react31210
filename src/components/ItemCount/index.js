import './styles.css';
import React, { useState } from "react";

function ItemCount({stock, initial, onAdd}){

    const [amount, setAmount] = useState(initial);


    const modifyAmount = (value) => {
        const result = amount + value;

        if(result <= stock && result >=1){
           setAmount(amount + value);
        }
        
    }


    return(
        <>
        
        <div className="counter-container">
            <span>Cantidad disponible: {stock}</span>
            <div className="counter">
                <button onClick={() => modifyAmount(-1)} className='counter-minus'>-</button>
                <span>{stock <= 0 ? 'Sin stock' : amount}</span>
                <button onClick={() => modifyAmount(+1)} className='counter-plus'>+</button>

            </div>
            <button className='buy-btn'>Comprar Ahora</button>
            <button className='add-btn' onClick={stock<=0 ? () => onAdd(0) : () => onAdd(amount)}>Agregar al Carrito</button>
        </div>
        </>
    );
}


export default ItemCount;