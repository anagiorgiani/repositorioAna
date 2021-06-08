import React from 'react';

class Complemento extends React.Component {

  render() {

    const { HandlerChange } = this.props
    return(
      <div>
      <label htmlFor='house'>
      <input 
      type='radio'
      id='house'
      name='complemento'
      value='House'
      onChange={ HandlerChange }
      />
      Casa
      </label>
      <label htmlFor='apart'>
      <input
      type='radio'
      id='apart'
      name='complemento'
      value='Apartament'
      onChange={ HandlerChange }
      />
      Apartamento
      </label>
      </div>
      )
      }
      }

export default Complemento;
