import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  /*let num = Math.floor(Math.random() * 47) + 1;
let response = await fetch('https://e51pzppdu1.execute-api.us-east-1.amazonaws.com/items/'+num);
let data = await response.json();*/

  const randomMessage = () => messages.Id[(Math.floor(Math.random() * messages.length))];

  //function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}
  //let selectedObject = filterById(messages['Id'], 2);
  let num = Math.floor(Math.random() * 47) + 1;

  const [greeting, setGreeting] = useState(JSON.stringify(messages[num].Text));


  return (
    <div> 
      <h3>{greeting}</h3>
    </div>
  );
}