import React,{useState,useEffect} from 'react'
import '../App'
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from './context/appcontext';
import { useNavigate } from 'react-router-dom';



const Clothes__List = () => {
    const [clothes, setclothes] = useState([])


    const{favorites,addToFavorites,removeToFavorites} = useAppContext();

    const navigate = useNavigate();

    const favouritesChecker=(id)=>{
        const boolean = favorites.some((cloth)=>cloth.id ===id);
        return boolean;
    }

    useEffect(()=>{
        axios
        .get(API_URL)
        .then((res) =>{
            console.log(res.data)
            setclothes(res.data)

        }).catch(err=>console.log(err))
    },[])



  return (
    <div className='clothes-list'>
        
        {clothes.map((cloth)=>(
            <div key={cloth.id} className='cloth'>
                <div>
                    <h2>{cloth.name}</h2>
                    </div>
                <div>
                    <img src={cloth.image_url} alt='#' onClick={()=>navigate(`/products/${cloth.id}`)}/>
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
        ))}
    </div>
  )
}

export default Clothes__List