import React from 'react'


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
 const listCheck = ['estudar', 'terminar estudos', 'aprender react']

function App() {
  return (listCheck.map((element => <li>{element}</li> ))
  );
}

export default App;
