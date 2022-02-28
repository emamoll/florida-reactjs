import React from 'react';
import './MenuProductos.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';

const MenuProductos = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button id="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                Productos
            </Button>
            <Menu id="fade-menu" MenuListProps={{'aria-labelledby': 'fade-button',}} anchorEl={anchorEl} open={open}
            onClose={handleClose} TransitionComponent={Fade}>
                <MenuItem onClick={handleClose}>
                    <Link to={'/productos/Pan'} className={'menuItem'}>
                        Pan
                    </Link>   
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/productos/Criollos'} className={'menuItem'}>
                        Criollos
                    </Link>    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/productos/Facturas'} className={'menuItem'}>
                        Facturas
                    </Link>    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/productos/Galletas'} className={'menuItem'}>
                        Galletas
                    </Link>    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/productos/Especialidades'} className={'menuItem'}>
                        Especialidades
                    </Link>    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/productos/Alfajores'} className={'menuItem'}>
                        Alfajores
                    </Link>    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/productos/Sandwich'} className={'menuItem'}>
                        Sandwich
                    </Link>    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/productos/Pebetes'} className={'menuItem'}>
                        Pebetes
                    </Link>    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/productos/Tortuguitas'} className={'menuItem'}>
                        Tortuguitas
                    </Link>    
                </MenuItem>   
            </Menu>
        </div>
    );
}

export default MenuProductos;