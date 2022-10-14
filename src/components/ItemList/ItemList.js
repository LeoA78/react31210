import './styles.css';
import Item from '../Item/Item';

function ItemList({items}) {
    return(
        <section className='item-list'>

            {items.map( ({id,name,unitPrice,imageUrl,description}) => {
                return(
                <Item 
                key={id}
                id={id}
                name={name} 
                unitPrice={unitPrice} 
                imageUrl={imageUrl} 
                description={description} />
                )
            })}
  </section>
    );
}

export default ItemList;

