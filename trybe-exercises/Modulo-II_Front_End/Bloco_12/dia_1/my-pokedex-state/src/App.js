import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
return (
<div className="App">
<h1 className='h1'> Pokedex </h1>
<Pokedex pokemons={pokemons} />
</div>
);
}

export default App;