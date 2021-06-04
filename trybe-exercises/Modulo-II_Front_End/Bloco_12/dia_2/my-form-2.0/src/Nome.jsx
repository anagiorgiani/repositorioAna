import React from 'react';

class Nome extends React.Component {

  render() {

    const { value } = this.props
    const { HandlerChange } = this.props
    
    return (
      <label>
        Nome
        <input 
          className='nome'
          name='nome'
          type='text'
          value={value}
          onChange={HandlerChange} 
          maxLength="40"
          required />
      </label>

    )
  }
}

export default Nome;
