import './styles.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { context } from '../CartContext';

function CartWidget () {

    const { getAmount } = useContext(context);

return (

<Link to='/cart' className='cart-btn'>
<LocalMallOutlinedIcon sx={{ fontSize: 28 }} />
<div className='shopping-counter'>
{getAmount() > 0 ? `(${getAmount()})` : ''}
</div>
</Link>

);
}


export default CartWidget;