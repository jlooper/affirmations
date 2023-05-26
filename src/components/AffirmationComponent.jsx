const data = await fetch('https://e51pzppdu1.execute-api.us-east-1.amazonaws.com/items').then((response) =>
    response.json()
);

console.log(data)

const Affirmation = () => {
  return <h3>{JSON.stringify(data[0].Text)}</h3>;
};
      
export default Affirmation;


/*import { h } from 'preact';
import { useState } from 'preact/hooks';

const messages = await fetch('https://e51pzppdu1.execute-api.us-east-1.amazonaws.com/items').then((response) =>
    response.json()
);

console.log(messages)

export default function Greeting() {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [affirmation, setAffirmation] = useState(messages[0]);

  return (
    <div> 
      <h3>{affirmation}! Thank you for visiting!</h3>
      <button onClick={() => setAffirmation(randomMessage())}>
        New Affirmation
      </button>
    </div>
  );
}*/