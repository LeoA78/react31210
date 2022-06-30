import './styles.css';


function Item({title,price,pictureUrl,description}) {

    return (
        <div className="item box">
            <div className="item-header">
                <img src={pictureUrl} alt="" className="item-image" />
            </div>
            <div className="item-details">
                <span className="item-price">${price}</span>
                <span className="item-title">{title}</span>
                <span className="item-description">{description}</span>
            </div>
        </div>
    );
}

export default Item;