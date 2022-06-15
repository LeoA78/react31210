import './navbar.css';
import logo from '../assets/images/logo.png';

function NavBar() {
  return (
    <>
      <header>
        <div className='brand'>
          <img src={logo} alt="Logo de Vibes" />
        </div>

        <nav className='menu'>
          <ul className='menu-list'>
            <li className='item'>Mujer</li>
            <li className='item'>Hombre</li>
            <li className='item'>Infantil</li>
            <li className='item'>Deportivo</li>
            <li className='item'>Ofertas</li>
          </ul>
        </nav>

        <h2>Carrito</h2>

      </header>
    </>
  );
}

export default NavBar;
