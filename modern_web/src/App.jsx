import { useState } from 'react';
import Recipe from './components/Recipe';
import Cup from './components/Cup';
import Greeting from './components/Greeting';
import Cup2 from './components/Cup2';
import TextInput from './components/InputValue';

function App() {
  const cups = [];

  for (let i = 1; i <= 12; i++) {
    cups.push(
      <Cup2 key={i} guest={i} />
    );
  }

  return (
    <>
      <h1>We are learning Components with DP</h1>

      <Recipe />
      <Cup />

      <Greeting
        name="aakash"
        time={Date.now()}
      />

      {cups}
        <TextInput value="30" onChange="submit" placeholder="enter your name"/>

          </>
  );
}

export default App;