import React,{useState,useEffect} from 'react'
import '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import{CLOTH_DETAILS_URL } from '../API';

const ClothesDetails = () => {

  const [cloth, setcloth] = useState({})

  const{id} = useParams();

  useEffect(()=>{
    axios
    .get(`${CLOTH_DETAILS_URL}/${id}`)
    .then((res)=>{
      setcloth(res.data);

    })
    .catch((err)=>console.log(err));
  },[id]);




  return (
    <div className=' ClothesDetails'>
     
   
    <div className='cloth-image'>
      <h2>{cloth?.name}</h2>
      <img src={cloth?.image_url} alt="#"/>
    </div>
    <div className='cloth-poster'><h2>Description</h2>
    <p>{cloth?.description}</p>
    <h2>List Price
      <p>{cloth?.list_price}</p>
    </h2>
    <h2>Sale Price
      <p>{cloth?.sale_price}</p>
    </h2>
    </div>
    </div>
  )
}

export default ClothesDetails
