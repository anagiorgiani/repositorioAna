import './App.css';
import React from 'react'

class App extends React.Component{
constructor(){
  super()

  this.handleClick = this.handleClick.bind(this)

  this.state ={
    objPerson: undefined,
    characters: [],
    loading: false,
    personIndex: 0,
  };
};


componentDidMount() {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    if(data.results.length <= this.state.personIndex){
      this.setState({personIndex:0})
    }
    this.setState({characters: data.results[this.state.personIndex]})
  })
}


componentDidUpdate() {
  this.componentDidMount()
}

handleClick(event) {
  this.setState((estadoAnterior) => ({
    personIndex: estadoAnterior.personIndex + 1
  }))
}


render() {
  const { characters } = this.state;
  return (
    <div className="App">
      <h1>
        Ricky and Morty Characters:
      </h1>
      <div className="body">
       
          
            <div className="container" key={characters.name}>
              <h3>{characters.name}</h3>
              <img src={characters.image} alt={characters.name}/>
              <button className="button" onClick={this.handleClick}>Next</button>
            </div>
            
              
            
          
        
      </div>
    </div>
  );
}
}

export default App;
