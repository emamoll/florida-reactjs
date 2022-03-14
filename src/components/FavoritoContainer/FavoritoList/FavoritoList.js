import React, { useContext } from 'react'
import './FavoritoList.css'
import { Link } from 'react-router-dom';
import { FavContext } from '../../../Context/CartContext/FavContext'
import FavoritoDetail from '../FavoritoDetail/FavoritoDetail';

const FavoritoList = () => {

    const valueFav = useContext(FavContext);
    const [favorito] = valueFav.favorito;
  
    return (
    <div>
        <h1 className='tituloFavorito'>Tus Favoritos</h1>
        <div className='categoriaGrid'>
        {favorito.length !== 0 ? 
            favorito.map((producto) => {
                return (
                    <div key={producto.id}>
                        <Link to={`/detail/${producto.id}`} className='link'>
                            <FavoritoDetail data={producto} />    
                        </Link>
                    </div>
                )
            }) : <h2 className='favoritoVacio'>No tenes favoritos seleccionados</h2>
        }
        </div>
    </div>
  )
}

export default FavoritoList