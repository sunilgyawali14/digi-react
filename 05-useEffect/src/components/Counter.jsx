import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
    const [count,setCount]= useState(0)
    
    // using the useEffect withOut Dependencies 
//  useEffect(()=> {
//     console.log("I use ecan request when you click in button ");

//  })

 //Running UseEffect using dependencies
 useEffect(()=> {
    console.log("I use ecan request when you click in button ");

 },[])
  return (
    <>
      <div>
        <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count+1)}>Inc +</button>
      <button onClick={()=> setCount(count-1)}>Inc -</button> 
      </div>
    </>
  );
};
export default Counter;
