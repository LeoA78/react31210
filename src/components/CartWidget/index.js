import './styles.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';


function CartWidget () {

    const { amount } = useSelector(state => state.cart);

return (

<Link to='/cart' className='cart-btn'>
<LocalMallOutlinedIcon sx={{ fontSize: 28 }} />
<div className='shopping-counter'>
{amount > 0 ? `(${amount})` : ''}
</div>
</Link>

);
}


export default CartWidget;