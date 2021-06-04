import React from 'react';

class Cpf extends React.Component {

  render() {

    const { value } = this.props
    const { HandlerChange } = this.props

    let error = undefined
    if (value.length > 11) error = 'CPF inválido!'

    return (
      <label>
        CPF:
        <input
         className='cpf'
          name='cpf'
          type='text'
          value={value}
          onChange={HandlerChange}
          maxLength="11"
          required />
          <span>{error ? error: ''} </span>
      </label>
    )
  }
}

export default Cpf;



