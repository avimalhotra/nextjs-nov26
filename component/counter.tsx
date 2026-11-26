"use client";

import { useState } from "react"
import { useRouter } from 'next/navigation';  


export default function Counter(){

     const router = useRouter();
     const handleClick = () => {

          router.push('/signup');
     };

     const [counter,setCounter]=useState(0);

     return (
          <div className="p-3">
               <h2 className="text-3xl font-bold">Counter</h2>
               <button onClick={()=>setCounter(counter+1)} className="border px-2 py-1 rounded mx-3 cursor-pointer">Add</button>
               <output>{counter}</output>

               <hr />

                 <button onClick={handleClick}>Signup</button>
          </div>
     )
}