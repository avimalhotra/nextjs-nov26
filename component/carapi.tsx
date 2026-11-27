"use client";

import { useEffect, useState } from "react";

export default function CarsAPI(){

     const [cars,setCars]=useState([]);
     const [error,setError]=useState(null);
     const [loading,setLoading]=useState(true);

     async function fetchCars(){
         try{
           const x=await fetch("/api/cars");
          // const x=await fetch("https://techaltum.com/node/api");
          if(!x.ok){ throw new Error(x.status) }
          const y=await x.json();
          setCars(y);
         }
         catch(err){
          setError(err)
         }
         finally{
          setLoading(false);
         }
     }

     useEffect(()=>{
          fetchCars();
     },[])

     return (
          <>
               { loading && <p>Loading Data</p> }
               <h2 className="text-3xl font-bold">Cars API</h2>

               <ol>
                    {
                         cars.map((elem,ind)=>(
                              <li key={ind}>{elem.name}</li>
                         ))
                    }
               </ol>

          </>
     )
}