import React from 'react';


class Endereco extends React.Component {
  
  render() {

    const { value } = this.props
    const { HandlerChange } = this.props


    return (
        <label>
          Endereço:
         <input
            className='endereco'
            name='endereco'
            type='text'
            value={value}
            onChange={HandlerChange} 
            maxLength="200"
          required />
        </label>
    )
  }
}

export default Endereco;
