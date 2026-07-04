import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0)
    
      return (
      <>
     <h1> we See the counter By using the useState</h1>
     <h2> Counter :{count}</h2>
    <button   onClick={()=> setCount(count+1)}> Click ME</button>
    </>
  )
}

export default Counter