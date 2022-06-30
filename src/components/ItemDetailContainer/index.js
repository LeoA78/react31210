import { SyncLoader } from "react-spinners";
import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { getData } from "../../mocks/fakeApi"
import "./styles.css";

function ItemListContainer() {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const product = listProducts[1];

  useEffect(() => {
    getData()
      .then(res => setListProducts(res))
      .finally(() => setLoading(false));

  }, []);

  return (
    <section className="detail-container">
      <ItemDetail item={product}/>
{/*       {
        loading
          ? <div className='loader'>
            <SyncLoader color="#F98AB1"/>
          </div>
          : <ItemList items={listProducts} />
      } */}
    </section>
  );
}

export default ItemListContainer;
