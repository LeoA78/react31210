import "./navbar.css";
import logo from "../assets/images/logo.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  return (
    <>
      <header>
        <div className="brand">
          <img src={logo} alt="Logo de Vibes" />
        </div>

        <nav className="menu">

          <input type="checkbox" id="check" />

          <label for="check" class="checkbtn">
            <i class="menu-icon">
              <MenuIcon/>
            </i>
          </label>

          <ul className="menu-list">
            <li className="item"><a href="#">Mujer</a></li>
            <li className="item"><a href="#">Hombre</a></li>
            <li className="item"><a href="#">Infantil</a></li>
            <li className="item"><a href="#">Deportivo</a></li>
            <li className="item"><a href="#">Ofertas</a></li>
          </ul>

        </nav>
        <ShoppingBagIcon fontSize="large" />
      </header>
    </>
  );
}

export default NavBar;
