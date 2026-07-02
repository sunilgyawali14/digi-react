import React from 'react'
import './App.css'
import Child from './components/Child'
import GetName from './components/GetName'

function App() {
  const users = ["Rakesh", "Alman"]

  const showUserName = (name) => {
    alert(`Hello, ${name}`)
  }

  return (
    <>
      <h1>Props Drilling in React</h1>

      <Child product="I Phone" price="NPR 70,000" />
      <h1>Get the alert box while clickin in the greet</h1>
     <div>
       {users.map((user, index) => (
        <GetName
          key={index}
          name={user}
          onSendUserName={showUserName}
        />
      ))}
     </div>
    </>
  )
}

export default App