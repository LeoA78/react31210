import "./navbar.css";
import logo from "../../assets/images/logo.png";
import CartWidget from "../CartWidget";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from "react-router-dom";


const menuItems = [{
  id: 1,
  label: 'Mujer',
  link: '/category/mujer',
},
{
  id: 2,
  label: 'Hombre',
  link: '/category/hombre',
},
{
  id: 3,
  label: 'Infantil',
  link: '/category/infantil',
},
{
  id: 4,
  label: 'Deportivo',
  link: '/category/deportivo',
},
]


function NavBar() {
  return (
    <>
      <header>

        <section className="container-menu">
          <nav className="menu">

            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="menu-icon">
                <MenuIcon />
              </i>
            </label>
            <ul className="menu-list">

              {menuItems.map(item =>
                <li className="menu-list-item" key={item.id}><NavLink to={item.link}>{item.label}</NavLink></li>
              )}

            </ul>
          </nav>
        </section>

        <section className="container-brand">

          <div className="brand">
            <Link to='/'><img src={logo} alt="Logo de Vibes" /></Link>
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
