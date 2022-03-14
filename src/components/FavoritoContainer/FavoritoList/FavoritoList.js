import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FavContext } from '../../../Context/CartContext/FavContext'
import FavoritoDetail from '../FavoritoDetail/FavoritoDetail';

const FavoritoList = () => {

    const valueFav = useContext(FavContext);
    const [favorito] = valueFav.favorito;
   
    




  return (
    <div className="catalogoGrid">
        {favorito.map((producto) => {
            return (
                <div key={producto.id}>
                    <Link to={`/detail/${producto.id}`} className='link'>
                        <FavoritoDetail data={producto} />    
                    </Link>
                    
                </div>
            )
        })}
    </div>
  )
}

export default FavoritoList