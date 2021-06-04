import React from 'react';

class ButtonSave extends React.Component {

  render() {
    const { value } = this.props
    const { sendForm } = this.props
      return(
          <button className="green" onClick={ sendForm } value={value}>Salvar</button>
          
         
      )
  }
}

export default ButtonSave;