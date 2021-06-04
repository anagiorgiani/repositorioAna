import React from 'react'

class Resumo extends React.Component {

  render() {

    const { value } = this.props
    const { HandlerChange } = this.props
   
    return (
      <label>
        Resumo Curriculo:
        <textarea 
          className='resumo'
          name='resumo'
          type='text'
          value={value}
          onChange={HandlerChange} 
          maxLength="1000"
          required />
      </label>

    )
  }
}

export default Resumo;

