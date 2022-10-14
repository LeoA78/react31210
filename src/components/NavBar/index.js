import "./navbar.css";
import CartWidget from "../CartWidget";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../../firebase/firebase";


function NavBar() {

  const [closed, setClosed] = useState(true);
  const [categories, setCategories] = useState([]);

  /*
  useEffect(() => {
    getCategories().then(result => {
      setCategories(result);
    }
    )
  }, []);

*/

    window.onscroll = function() { /* Función para cambiar tamaño del navbar */
      if(window.scrollY > 100){
        if(closed){
          setClosed(false);
        }
      }else{
        if(!closed){
          setClosed(true);
        }
      }
    };


  return (
    <>
      <header className={closed ? 'extend-header' : ''}>

        <section className='container-menu'>
          <nav className="menu">

            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="menu-icon">
                <MenuIcon />
              </i>
            </label>
            <ul className="menu-list">

              {categories.map(item =>
                <li className="menu-list-item" key={item.id}><NavLink to={item.link}>{item.name}</NavLink></li>
              )}

            </ul>
          </nav>
        </section>

        <section className="container-brand">

          <div className="brand">
            <Link to='/'><img src="https://i.ibb.co/RDxzZyq/logo.png" alt="Logo de Vibes" /></Link>
          </div>

        </section>

        <section className="container-icons">
          <div className="box-icons">
            <CartWidget />

          </div>
        </section>

      </header>
    </>
  );
}

export default NavBar;
