import React from 'react';

class Complemento extends React.Component {

  render() {

    const { value } = this.props
    const { HandlerChange } = this.props
    return (
      <label>
        Complemento:
        Casa
        <input
          className='complemento'
          name='complemento'
          type='radio'
          value= 'casa'
          onChange={HandlerChange} />
          Apto
          <input
          className='complemento'
          name='complemento'
          type='radio'
          value='apto'
          onChange={HandlerChange} />
          
      </label>

    )
  }
}

export default Complemento;
