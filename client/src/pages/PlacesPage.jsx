import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";

import AccountNav  from "./AccountNav";
import PlaceImg from "../PlaceImg";


export default  function PlacesPage(){
const [places,setPlaces] = useState([]);
useEffect(()=>{
   

    axios.get('/user-places').then(({data})=>{
        setPlaces(data);
        // {places.length>0 && places.map(place=>{
        //    console.log(place.owner)
        //  })}
        


    });
},[])


 

   
    return(
        <div>
            <AccountNav/>
      
            
            
            <div className="text-center">
                <Link  className=" inline-flex gap-1 bg-primary text-white py-2 px6 rounded-full "to ={'/account/places/new'} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
   </svg>
      Add new place
       </Link>
            </div>
      
    
        <div className="mt-4">
          
      
     {places.length>0 && places.map(place=>{
       return (
        
        <Link  to={'/account/places/'+place._id} className=" flex cursor-pointer gap-4 bg-gray-100 p-2 rounded-2xl" key={place._id}  >
         <div className="flex h-32 grow shrink-0">
        {place.photos.length>0 &&(
            <img src={'http://localhost:4000/'+place.photos[0]} alt="" />
        )}

         </div >

       <div className=" grow-0 shrink">
       <h2 className="text-xl"> {place.title}</h2>
        <p className="text-sm mt-2">
            {place.description}
       
        </p>
        </div>
        </Link>
        
        
        )
     })}

        </div>

        </div>

      
    
        
       



     
    );
}