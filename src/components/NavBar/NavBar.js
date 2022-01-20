import './NavBar.css';
import Logo from '../Img/logo.png'

const NavBar = () => {
    return (
        <header>
            <a>
                <img src={Logo} alt="Logo Florida" className="logo"/>
            </a>
            <nav>
                <li className="seccionesNavegador">Productos</li>|
                <li className="seccionesNavegador">Favoritos</li>|
                <li className="seccionesNavegador">Carrito</li>                
            </nav>
        </header>
    )
};

export default NavBar;