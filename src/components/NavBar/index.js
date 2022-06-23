import "./navbar.css";
import logo from "../../assets/images/logo.png";
import CardWidget from "../CardWidget";
import MenuIcon from '@mui/icons-material/Menu';


const menuItems = [{
  id:1,
  label: 'Mujer',
  link: '#',
},
{
  id:2,
  label: 'Hombre',
  link: '#',
},
{
  id:3,
  label: 'Infantil',
  link: '#',
},
{
  id:4,
  label: 'Deportivo',
  link: '#',
},
{
  id:5,
  label: 'Ofertas',
  link: '#',
},
]


function NavBar() {
  return (
    <>
      <header>
        <div className="brand">
          <img src={logo} alt="Logo de Vibes" />
        </div>

        <nav className="menu">

          <input type="checkbox" id="check" />

          <label className="checkbtn">
            <i className="menu-icon">
              <MenuIcon/>
            </i>
          </label>

          <ul className="menu-list">

            {menuItems.map( item =>
              <li className="item" key={item.id}><a href={item.link}>{item.label}</a></li>
            )}
        
          </ul>

        </nav>
        
        <CardWidget/>

      </header>
    </>
  );
}

export default NavBar;
