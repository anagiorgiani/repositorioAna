import React from 'react';

class Estado extends React.Component {

  render() {

    const { value } = this.props
    const { HandlerChange } = this.props
    return (
      <label>
        Escolha seu Estado:
        <select
          className='estado'
          name='estado'
          value='estado'
          value={value}
          onChange={HandlerChange}>

          <option>Estado</option>
          <option>AC</option>
          <option>AL</option>
          <option>AP</option>
          <option>AM</option>
          <option>BA</option>
          <option>CE</option>
          <option>ES</option>
          <option>GO</option>
          <option>MA</option>
          <option>MT</option>
          <option>MS</option>
          <option>MG</option>
          <option>PA</option>
          <option>PB</option>
          <option>PR</option>
          <option>PE</option>
          <option>PI</option>
          <option>RJ</option>
          <option>RN</option>
          <option>RS</option>
          <option>RO</option>
          <option>RR</option>
          <option>SC</option>
          <option>SP</option>
          <option>SE</option>
          <option>TO</option>
          <option>DF</option>
        </select>
      </label>

    )
  }
}
export default Estado;
