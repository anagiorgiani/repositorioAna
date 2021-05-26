import React from 'react';
import './App.css';
import ListPokemons from './data.js';
import PokemonList from './PokemonList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <PokemonList poks={ListPokemons} />
      </div>
    );
  }
}

export default App;
