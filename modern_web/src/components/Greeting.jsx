import React from "react";

function Gretting ({name}){
const time= Date.now()
    return(
        <>
        <h1>Hello ,{name}</h1>
        <span>The time of today is : {time}</span>
        </>
    )
}
export default Gretting