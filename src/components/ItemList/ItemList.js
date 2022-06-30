import './styles.css';
import Item from '../Item/Item';

function ItemList({items}) {
    return(
        <section className='item-list'>

            {items.map( ({id,title,price,pictureUrl,description}) => {
                return(
                <Item 
                key={id} 
                title={title} 
                price={price} 
                pictureUrl={pictureUrl} 
                description={description} />
                )
            })}

        </section>
    );
}

export default ItemList;

