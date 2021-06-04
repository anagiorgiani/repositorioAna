import React from 'react';

class ButtonReset extends React.Component {

  render() {
      const { resetForm }= this.props
      return(
          <button className="red" type="reset" onClick={ resetForm }>Limpar</button>
      )
  }
}

export default ButtonReset;