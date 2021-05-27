import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {

    super()
    this.handleClick = this.handleClick.bind(this)
    this.click = this.click.bind(this)
    this.clickHandle = this.clickHandle.bind(this)
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,

    }

  }

  handleClick(event) {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    if ((this.state.numeroDeCliques + 1) % 2 === 0) {

      event.target.style.backgroundColor = 'green'
    }
    else {
      event.target.style.backgroundColor = 'purple'
    }
  }


  click(event) {
    this.setState((estadoAnterior) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
    if ((this.state.numeroDeCliques1 + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'green'
    }
    else {
      event.target.style.backgroundColor = 'purple'
    }
  }


  clickHandle(event) {
    this.setState((estadoAnterior) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
    if ((this.state.numeroDeCliques2 + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'green'
    }
    else {
      event.target.style.backgroundColor = 'purple'
    }

  }


  render() {
    return (
      <div>
        <button className='but' onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
        <button className='but' onClick={this.click}>{this.state.numeroDeCliques1}</button>
        <button className='but' onClick={this.clickHandle}>{this.state.numeroDeCliques2}</button>
      </div>
    )
  }
}

export default App;


