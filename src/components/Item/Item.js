import {Link} from 'react-router-dom';
import './styles.css';


function Item({id,title,price,pictureUrl,description}) {

    return (
        <Link to={'/product/' + id} className="item box">
            <div className="item-header">
                <img src={pictureUrl} alt="" className="item-image" />
            </div>
            <div className="item-details">
                <span className="item-price">${price}</span>
                <span className="item-title">{title}</span>
                <span className="item-description">{description}</span>
            </div>
        </Link>
    );
}

export default Item;