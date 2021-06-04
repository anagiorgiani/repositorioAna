import React from 'react';

class Descricao extends React.Component {

  render() {

    const { value } = this.props
    const { HandlerChange } = this.props
    
    return (
      <label>
        Descrição Cargo:
        <textarea
          className='descricao'
          name='descricao'
          type='text'
          value={value}
          onChange={HandlerChange} 
          maxLength="500"
          required />
          
      </label>
    )
  }
}

export default Descricao;

