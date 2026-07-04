import React, { useState } from "react";

const Toggle = () => {
    const [isVisible , setIsVisible]= useState(false)
  return (
    <>
      <div>
        <h1>Toggle</h1>
      </div>
      <p>i can see tou buddy :{isVisible} </p>
      <button onClick={()=> setIsVisible(!isVisible)}>
        {isVisible ? "Hide": "Show" }Message</button>
        {isVisible && <p>Tatatat ttuu tuu tu </p>}
    </>
  );
};

export default Toggle;
