import './styles.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function CardWidget () {
return (
<>
<button className='cart-btn'>
<ShoppingCartIcon />
<div className='shopping-counter'>
10
</div>
</button>
</>
);
}


export default CardWidget;