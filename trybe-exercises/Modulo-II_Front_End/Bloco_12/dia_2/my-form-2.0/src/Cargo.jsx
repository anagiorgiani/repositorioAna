import React from 'react';

class Cargo extends React.Component {

  render() {

    const { value } = this.props
    const { HandlerChange } = this.props
    const { HandlerMouse } = this.props
     
    return (
      <label>
        Cargo:
        <textarea
          className='cargo'
          name='cargo'
          type='text'
          value={value}
          onChange={HandlerChange} 
          onMouseEnter={HandlerMouse}
          maxLength="40"
          required 
           />
           
      </label>
    )
  }
}

export default Cargo;

