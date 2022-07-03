import './styles.css';
import ItemCount from '../ItemCount';

function ItemDetail({ item }) {
    return (
        <>
            <section className='detail-content box'>
                <div className='detail-image'>
                    <img src={item.pictureUrl} alt="" />
                </div>
                <div className='detail-box'>
                    <div className='detail'>
                        <h2 className='detail-title'>{item.title}</h2>
                        <p className='detail-description'>{item.description}</p>
                        <p className='detail-price'>${item.price}</p>
                    </div>
                    <ItemCount stock={item.stock} initial={1} onAdd={() => null} />
                </div>
            </section>
        </>
    );
}

export default ItemDetail;