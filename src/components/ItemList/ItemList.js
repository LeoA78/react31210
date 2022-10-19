import './styles.css';
import Item from '../Item/Item';

function ItemList({items}) {
    return(
        <section className='item-list'>

            {items.map( ({id,name,unitPrice,imageUrl,description,stock}) => {
                return(
                <Item 
                key={id}
                id={id}
                name={name} 
                unitPrice={unitPrice} 
                imageUrl={imageUrl} 
                description={description}
                stock={stock}/>
                )
            })}
  </section>
    );
}

export default ItemList;

