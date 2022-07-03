/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList/ItemList";
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { getData } from "../../mocks/fakeApi";
import {useParams} from "react-router-dom";
import "./styles.css";

function ItemListContainer({ greeting }) {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();

  /*   const onAdd = (amount) =>{
      if(amount === 0){
        console.log(`No hay stock disponible`)
        return;
      }
      console.log(`Agregaste ${amount} productos al carrito`)
    } */


  useEffect(() => {
    
    setLoading(true);

    getData(categoryId)
      .then(res => setListProducts(res))
      .finally(() => setLoading(false));

  }, [categoryId]);

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
