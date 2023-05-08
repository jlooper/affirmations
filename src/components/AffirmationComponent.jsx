import { useState } from 'preact/hooks';

export default function Affirmation({affirmations}) {

  let num = Math.floor(Math.random() * 47) + 1;
  const [affirmation] = useState(JSON.stringify(affirmations[num].Text));

  return (
    <div> 
      <h3>{affirmation}</h3>
    </div>
  );
}