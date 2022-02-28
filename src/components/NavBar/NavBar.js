import React, {useContext} from 'react';
import './NavBar.css';
import Logo from "../../assets/logo.png";
import Carrito from '../../assets/shopping-cart-solid.svg';
import Lupa from '../../assets/lupa-icon.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext';
import MenuProductos from '../MenuProductos/MenuProductos';

const NavBar = () => {

    const [items] = useContext(CartContext)

    return (
        <header>
            <Link to={'/'}>
                <img src={Logo} alt="Logo Florida" className="logo"/>
            </Link>
            <nav>
                <Link to={'/'} className="seccionesNavegador">INICIO</Link>|
                <li className="seccionesNavegador"><MenuProductos /></li>|
                <Link to={'/favoritos'} className="seccionesNavegador">FAVORITOS</Link>|
                <Link to={'/buscar'} className="seccionesNavegador">
                    <img src={Lupa} alt="Imagen Lupa" className="imagenCarrito" />
                </Link>|
                <Link to={'/carrito'} className="seccionesNavegador">
                    <img src={Carrito} alt="Imagen Carrito" className="imagenCarrito"/>
                    <p className='cantidadCarrito' style={{display: (items.length) === 0 ? 'none' : 'block'}} >{items.length}</p>
                </Link>                
            </nav>
        </header>
    )
};

export default NavBar;