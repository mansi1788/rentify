import React from 'react'
import '../App'
import { useAppContext } from './context/appcontext';


const Favorites = () => {

    
    const{favorites,addToFavorites,removeToFavorites} = useAppContext();

    console.log('favourites are',favorites);

    const favouritesChecker=(id)=>{
        const boolean = favorites.some((cloth)=>cloth.id ===id);
        return boolean;
    }


  return (
    <div className='favorites'>
     
     {favorites.length>0 ? favorites.map((cloth)=>(
            <div key={cloth.id} className='cloth'>
                <div>
                    <h2>{cloth.name}</h2>
                    </div>
                <div>
                    <img src={cloth.image_url} alt='#'/>
                    </div>
                <div>

                   { favouritesChecker(cloth.id)?(
                    
                    <button onClick={()=> removeToFavorites(cloth.id)}>
                        Remove To Favourites
                        </button>
                        ) : (
                             <button onClick={()=>addToFavorites(cloth)}>Add To Favourites
                        
                        </button>
                        )}
                </div>

            </div> 
        )):<h1>You don't have any favourite item yet</h1>}
    </div>
  )
}

export default Favorites
