import './styles.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
function CartWidget () {
return (
<>
<button className='cart-btn'>
<LocalMallOutlinedIcon sx={{ fontSize: 28 }} />
<div className='shopping-counter'>
(2)
</div>
</button>
</>
);
}


export default CartWidget;