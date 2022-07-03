import "./navbar.css";
import logo from "../../assets/images/logo.png";
import CardWidget from "../CardWidget";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


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
{
  id: 5,
  label: 'Ofertas',
  link: '/category/ofertas',
},
]


function NavBar() {
  return (
    <>
      <header>
        <div className="brand">
          <Link to='/'><img src={logo} alt="Logo de Vibes" /></Link>
        </div>



        <nav className="menu">

          <input type="checkbox" id="check" />

          <ul className="menu-list">

            {menuItems.map(item =>
              <li className="menu-list-item" key={item.id}><Link to={item.link}>{item.label}</Link></li>
            )}

          </ul>

        </nav>

        <div className="box-icons">
          <CardWidget />

          <label htmlFor="check" className="checkbtn">
            <i className="menu-icon">
              <MenuIcon />
            </i>
          </label>
        </div>

      </header>
    </>
  );
}

export default NavBar;
