import "./navbar.css";
import CartWidget from "../CartWidget";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/user/userSlice";
import { clearCart } from "../../store/slices/cart/cartSlice";

function NavBar() {
  const [closed, setClosed] = useState(true);
  const [categories, setCategories] = useState([]);
  const { isLogged } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/category/all")
      .then((response) => response.json())
      .then((result) => setCategories(result.data))
      .catch((error) => console.log(error));
  }, []);


  const logout = () => {
    if (isLogged) {
      dispatch(logoutUser());
      dispatch(clearCart());
      navigate("/Login");
    }
  };




  window.onscroll = function () {
    /* Función para cambiar tamaño del navbar */
    if (window.scrollY > 100) {
      if (closed) {
        setClosed(false);
      }
    } else {
      if (!closed) {
        setClosed(true);
      }
    }
  };

  return (
    <>
      <header className={closed ? "extend-header" : ""}>
        <section className="container-menu">
          <nav className="menu">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="menu-icon">
                <MenuIcon />
              </i>
            </label>
            <ul className="menu-list">
              {categories.map((item) => (
                <li className="menu-list-item" key={item.id}>
                  <NavLink to={"/category/" + item.name}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className="container-brand">
          <div className="brand">
            <Link to="/">
              <img
                src="https://i.ibb.co/RDxzZyq/logo.png"
                alt="Logo de Vibes"
              />
            </Link>
          </div>
        </section>

        <section className="container-icons">
          <div className="box-icons">
            {isLogged ? (
              <div className="right-menu">
                <CartWidget />
                <Link onClick={logout} to="/login" className="link-item" alt="Cerrar Sesión">
                  Cerrar Sesión
                </Link>
              </div>
            ) : (
              <Link className="link-item" to="/login" alt="Registro de usuario">
                Iniciar Sesión
              </Link>
            )}
          </div>
        </section>
      </header>
    </>
  );
}

export default NavBar;
