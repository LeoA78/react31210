import './styles.css';

function ItemCount({onAdd, modifyAmount, amount, stock}) {  

    return(

        <div className="counter-container">
            <span>Cantidad disponible: {stock}</span>
            <div className="counter">
                <button onClick={() => modifyAmount(-1)} className='counter-minus'>-</button>
                <span>{amount}</span>
                <button onClick={() => modifyAmount(+1)} className='counter-plus'>+</button>

            </div>
            <button className='add-btn' onClick={() => onAdd(amount)}>Agregar al Carrito</button>
        </div>

    );
}


export default ItemCount;