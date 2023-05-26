const data = await fetch('https://e51pzppdu1.execute-api.us-east-1.amazonaws.com/items').then((response) =>
    response.json()
);

const Affirmation = () => {
  return <h3>{JSON.stringify(data[0].Text)}</h3>;
};
      
export default Affirmation;