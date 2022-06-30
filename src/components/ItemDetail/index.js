import './styles.css';
import ItemCount from '../ItemCount';

function ItemDetail() {
    return (
        <>
            <section className='detail-content box'>
                <div className='detail-image'>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_754706-MLA48174872438_112021-W.webp" alt="" />
                </div>
                <div className='detail-box'>
                    <div className='detail'>
                        <h2 className='detail-title'>Pantalon Pampero Cargo De Trabajo Reforzado</h2>
                        <p className='detail-description'>Pantalon Pampero Cargo de Trabajo Reforzado</p>
                        <p className='detail-price'>$6900</p>
                    </div>
                    <ItemCount stock={10} initial={1} onAdd={() => null} />
                </div>
            </section>
        </>
    );
}

export default ItemDetail;