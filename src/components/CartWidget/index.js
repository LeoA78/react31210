import './styles.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import React, { useContext } from 'react';
import { context } from '../CartContext';

function CartWidget () {

    const { getAmount } = useContext(context);

return (

<button className='cart-btn'>
<LocalMallOutlinedIcon sx={{ fontSize: 28 }} />
<div className='shopping-counter'>
({getAmount()})
</div>
</button>

);
}


export default CartWidget;