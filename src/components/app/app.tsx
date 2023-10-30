import React from 'react';
import { Info } from '../info/info';
import { Button } from '../button/button';
import { Gentleman } from '../gentleman/gentleman';

export function App() {
  console.log('Loaded Main 😺');

  return (
    <div className="container">
      <Info></Info>
      <Button></Button>
      <Gentleman></Gentleman>
      <p>Loaded Kitty 😺</p>
    </div>
  );
}
