import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function Item({id,name,unitPrice,imageUrl,description}) {

    return (
        <Link to={'/product/' + id} className="item box">
            <div className="item-header">
                <img src={imageUrl} alt="" className="item-image" />
            </div>
            <div className="item-details">
                <span className="item-price">${unitPrice}</span>
                <span className="item-title">{name}</span>
                <span className="item-description">{description}</span>
            </div>
        </Link>
    );
}

export default Item;