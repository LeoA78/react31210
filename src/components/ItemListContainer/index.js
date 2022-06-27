/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList/ItemList";
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { getData } from "../../mocks/fakeApi"
import "./styles.css";

function ItemListContainer({ greeting }) {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /*   const onAdd = (amount) =>{
      if(amount === 0){
        console.log(`No hay stock disponible`)
        return;
      }
      console.log(`Agregaste ${amount} productos al carrito`)
    } */


  useEffect(() => {
    getData()
      .then(res => setListProducts(res))
      .finally(() => setLoading(false));

  }, []);

  return (
    <section className="container">
      {/*         <h2>{greeting}</h2>
        <ItemCount initial={4} stock={10} onAdd={onAdd}/> */}

      {
        loading
          ? <div className='loader'>
            <SyncLoader color="#F98AB1"/>
          </div>
          : <ItemList items={listProducts} />
      }


    </section>
  );
}

export default ItemListContainer;
