import ItemCount from "../ItemCount";
import "./styles.css";

function ItemListContainer({greeting}) {

  const onAdd = (amount) =>{
    if(amount === 0){
      console.log(`No hay stock disponible`)
      return;
    }
    console.log(`Agregaste ${amount} productos al carrito`)
  }

  return (
    <section className="container">
        <h2>{greeting}</h2>
        <ItemCount initial={4} stock={10} onAdd={onAdd}/>
    </section>
    );
}


export default ItemListContainer;