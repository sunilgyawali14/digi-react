import React from "react";

function Child(props){
console.log(props.product);
console.log(props.price);
    return(
        <>
        
    <h2>we learn about the Props in the React </h2>
    <p>First we learn bypassing the properties </p>
        <div className="continer"> 
            <h1>I Phone 17 Pro Max</h1>
           <div>Name: {props.product}</div>
           <div>Price: {props.price}</div> 

        </div>
        
        </>
    )
}
export default Child



// function Child({product ,price}) {
//   return (
//     <>
//     <p>Here we learn by passing the same properties implemeted in app.jsx</p>
// <div>{product}</div>
// <div>{price}</div>


// </>

// )
// }

// export default Child