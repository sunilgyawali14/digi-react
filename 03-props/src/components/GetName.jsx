import React from "react";

function GetName({name,onSendUserName}){

    const handleClick = () =>{
    onSendUserName(name)
           
    }
    return(
        <>
        <div className="card">
            <p>Hello,{name}</p>
            <button onClick={handleClick}>Greet</button>
            
        </div>

        
        </>
    )
}
export default GetName