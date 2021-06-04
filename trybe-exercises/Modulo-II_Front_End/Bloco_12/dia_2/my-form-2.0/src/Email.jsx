import React from 'react'

class Email extends React.Component {
  render() {
    const { value } = this.props
    const { HandlerChange } = this.props
    return (
      <label>
        Email:
        <input
          className='email'
          name='email'
          type='text'
          value={value}
          onChange={HandlerChange} 
          maxLength="50"
          required />
      </label>

    )
  }
}
export default Email;



