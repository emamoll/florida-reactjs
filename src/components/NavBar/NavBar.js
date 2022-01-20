import './NavBar.css';
import Logo from '../Img/logo.png'
import Carrito from '../Img/shopping-cart-solid.svg'

const NavBar = () => {
    return (
        <header>
            <a href="index.html">
                <img src={Logo} alt="Logo Florida" className="logo"/>
            </a>
            <nav>
                <li className="seccionesNavegador">Productos</li>|
                <li className="seccionesNavegador">Favoritos</li>|
                <li className="seccionesNavegador">
                    <img src={Carrito} alt="Imagen Carrito" className="imagenCarrito"/>
                </li>                
            </nav>
        </header>
    )
};

export default NavBar;