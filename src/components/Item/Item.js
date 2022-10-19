import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';

function Item({id,name,unitPrice,imageUrl,description,stock}) {

    const [inStock, setInStock] = useState(true);

    useEffect(() => {

        if(stock === 0){
            setInStock(false);
        }

    }, [stock]);


   

        if(inStock){
            return(


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
            )
        }else{
            return(
                <div className="item box">
                <div className="item-header">
                    <img src={imageUrl} alt="" className="item-image no-stock" />
                </div>
                <div className="item-details">
                    <span className="item-price">${unitPrice}</span>
                    <span className="item-title">{name}</span>
                    <span className="item-stock">Stock Agotado</span>
                </div>
            </div>
            )
        }


}

export default Item;