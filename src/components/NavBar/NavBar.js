import React, { useContext } from 'react';
import './NavBar.css';
import Logo from "../../assets/logo.png";
import Carrito from '../../assets/shopping-cart-solid.svg';
import Lupa from '../../assets/lupa-icon.png';
import { Link } from 'react-router-dom';
import MenuProductos from '../MenuProductos/MenuProductos';
import { StateContext } from '../../Context/Provider/StateProvider';
import { Badge } from '@mui/material';
import { FavContext } from '../../Context/CartContext/FavContext';

const NavBar = () => {
    const value = useContext(StateContext)
    const [carrito] = value.carrito

    const valueFav = useContext(FavContext);
    const [favorito] = valueFav.favorito

    return (
        <header>
            <Link to={'/'}>
                <img src={Logo} alt="Logo Florida" className="logo"/>
            </Link>
            <nav>
                <Link to={'/'} className="seccionesNavegador">INICIO</Link>|
                <li className="seccionesNavegador"><MenuProductos /></li>|
                <Link to={'/favoritos'} className="seccionesNavegador">
                    <Badge badgeContent={favorito.length} color='secondary'>
                        FAVORITOS
                    </Badge>
                </Link>|
                <Link to={'/buscar'} className="seccionesNavegador">
                    <img src={Lupa} alt="Imagen Lupa" className="imagenCarrito" />
                </Link>|
                <Link to={'/carrito'} className="seccionesNavegador">
                    <Badge badgeContent={carrito.length} color='secondary'>
                        <img src={Carrito} alt="Imagen Carrito" className="imagenCarrito"/>
                    </Badge>
                </Link>                
            </nav>
        </header>
    )
};

export default NavBar;