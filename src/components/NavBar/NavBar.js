import './NavBar.css';
import Logo from "../../assets/logo.png";
import Carrito from '../../assets/shopping-cart-solid.svg';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to={'/productos'}>
                <img src={Logo} alt="Logo Florida" className="logo"/>
            </Link>
            <nav>
                <Link to={'/productos'} className="seccionesNavegador">Productos</Link>|
                <Link to={'/favoritos'} className="seccionesNavegador">Favoritos</Link>|
                <li className="seccionesNavegador">
                    <img src={Carrito} alt="Imagen Carrito" className="imagenCarrito"/>
                </li>                
            </nav>
        </header>
    )
};

export default NavBar;