import './NavBar.css';
import Logo from "../../assets/logo.png";
import Carrito from '../../assets/shopping-cart-solid.svg';
import Lupa from '../../assets/lupa-icon.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to={'/'}>
                <img src={Logo} alt="Logo Florida" className="logo"/>
            </Link>
            <nav>
                <Link to={'/'} className="seccionesNavegador">Productos</Link>|
                <Link to={'/favoritos'} className="seccionesNavegador">Favoritos</Link>|
                <Link to={'/buscar'} className="seccionesNavegador">
                    <img src={Lupa} alt="Imagen Lupa" className="imagenCarrito" />
                </Link>|
                <li className="seccionesNavegador">
                    <img src={Carrito} alt="Imagen Carrito" className="imagenCarrito"/>
                </li>                
            </nav>
        </header>
    )
};

export default NavBar;