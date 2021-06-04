import React from 'react';
import Cargo from './Cargo';
import Complemento from './Complemento';
import Cpf from './Cpf';
import Descricao from './Descricao';
import Endereco from './Endereco';
import Nome from './Nome';
import Estado from './Estado';
import Resumo from './Resumo'
import Email from './Email'
import ButtonSave from './ButtonSave';
import ButtonReset from './ButtonReset';

const stateInit ={
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  estado: '',
  complemento: false,
  resumo: '',
  cargo: '',
  descricao: '',
  exibirAlertCargo: true,
  submit: false,
}


class Form extends React.Component {
  constructor() {
    super()
    this.HandlerChange = this.HandlerChange.bind(this)
    this.HandlerMouse = this.HandlerMouse.bind(this)
    this.UpperCaseName = this.UpperCaseName.bind(this)
    this.sendForm = this.sendForm.bind(this)
    this.resetForm =this.resetForm.bind(this)

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      estado: '',
      complemento: false,
      resumo: '',
      cargo: '',
      descricao: '',
      exibirAlertCargo: true,
      submit: false,
    }
  }

  HandlerChange({ target }) {
    const { name } = target
    let value = target.type === 'checkbox' ? target.checked : target.value;
    value = name === 'nome'? this.UpperCaseName(value): value;

    if(name==='email') value= this.validateEmail(value);

    this.setState({
      [name]: value
    })
  }

  HandlerMouse() {
    if (this.state.exibirAlertCargo) {
      alert('descreva campo com cuidado')
      this.setState({
        exibirAlertCargo: false
      })
    }
  }

  UpperCaseName (str){
     return str.toUpperCase();
  }

  validateEmail = email => email.replace(/[^\w\s]/gi, '')

  sendForm = () => { this.setState({ submit: true }) };

  resetForm = () => {this.setState(stateInit) };


  render() {
    return (
      <div>
        <h1>Meu Formulário React</h1>
        <form>
          <fieldset className='field'>
            <Nome value={this.state.nome} HandlerChange={this.HandlerChange} />
            <Email value={this.state.email} HandlerChange={this.HandlerChange} />
            <Cpf value={this.state.cpf} HandlerChange={this.HandlerChange} />
            <Endereco value={this.state.endereco} HandlerChange={this.HandlerChange} />
            <Estado value={this.state.estado} HandlerChange={this.HandlerChange} />
            <Complemento value={this.state.complemento} HandlerChange={this.HandlerChange} />
          </fieldset>
          <fieldset className='field'>
            <Resumo value={this.state.resumo} HandlerChange={this.HandlerChange} />
            <Cargo value={this.state.cargo} HandlerChange={this.HandlerChange} HandlerMouse={this.HandlerMouse} />
            <Descricao value={this.state.descricao} HandlerChange={this.HandlerChange} />
            <ButtonSave value={this.state.submit}  sendForm={this.sendForm} />
            <ButtonReset resetForm={this.resetForm}/>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;