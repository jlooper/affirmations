import { useState } from 'preact/hooks';

export default function Affirmation({affirmations}) {

  const num = Math.floor(Math.random() * affirmations.length);
  const [affirmation] = useState(JSON.stringify(affirmations[num].Text));

  return (
    <div> 
      <h3>{affirmation}</h3>
    </div>
  );
}