import React, {useContext} from 'react';
import './NavBar.css';
import Logo from "../../assets/logo.png";
import Carrito from '../../assets/shopping-cart-solid.svg';
import Lupa from '../../assets/lupa-icon.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

const NavBar = () => {

    const [items, setItems] = useContext(CartContext)

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
                <Link to={'/carrito'} className="seccionesNavegador">
                    <img src={Carrito} alt="Imagen Carrito" className="imagenCarrito"/>
                    <p className='cantidadCarrito' style={{display: (items.length) === 0 ? 'none' : 'block'}} >{items.length}</p>
                </Link>                
            </nav>
        </header>
    )
};

export default NavBar;